import { createClient } from '@supabase/supabase-js';
import {useCallback, useMemo, useState} from 'react';
import {CarWithCategory, Category, getAllCategories} from "@/lib/queries/supabase-query";
import {CategoryWithActive} from "@/app/components/sections/CarShowcaseSection/CarShowcaseSection";

let supabaseInstance: any = null;

export const getSupabaseClient = () => {
    if (!supabaseInstance) {
        supabaseInstance = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            {
                auth: {
                    persistSession: false, 
                },
                db: {
                    schema: 'public',
                },
            }
        );
    }
    return supabaseInstance;
};

// Cache cho categories
let categoriesCache: Category[] | null = null;
let categoriesCacheTime = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export async function getCachedCategories(): Promise<Category[]> {
    const now = Date.now();

    if (categoriesCache && (now - categoriesCacheTime) < CACHE_DURATION) {
        return categoriesCache;
    }

    const categories = await getAllCategories();
    categoriesCache = categories;
    categoriesCacheTime = now;

    return categories;
}

// Optimized query với indexes
export async function getOptimizedCars(
    categoryDes?: string,
    limit: number = 6,
    offset: number = 0
) {
    const supabase = getSupabaseClient();

    let query = supabase
        .from('cars')
        .select(`
      id,
      name,
      price,
      image_url,
      mileage,
      transmission,
      capacity,
      fuel_type,
      featured,
      category:categories!inner(
        id,
        name,
        description
      )
    `)
        .order('featured', { ascending: false }) 
        .order('created_at', { ascending: true });

    if (categoryDes) {
        query = query.eq('category.description', categoryDes);
    }

    const { data, error, count } = await query
        .range(offset, offset + limit - 1);

    if (error) throw error;

    return { cars: data || [], total: count || 0 };
}

// React Hook for data fetching
export function useCarShowcase() {
    const [state, setState] = useState({
        categories: [] as CategoryWithActive[],
        cars: [] as CarWithCategory[],
        loading: true,
        error: null as string | null,
        totalCars: 0,
    });

    const loadData = useCallback(async (
        categoryDes?: string,
        limit?: number,
        offset?: number
    ) => {
        try {
            setState(prev => ({ ...prev, loading: true }));

            const [categoriesData, carsData] = await Promise.all([
                getCachedCategories(),
                getOptimizedCars(categoryDes, limit, offset)
            ]);

            setState({
                categories: categoriesData.map((cat, idx) => ({
                    ...cat,
                    active: idx === 0
                })),
                cars: carsData.cars,
                totalCars: carsData.total,
                loading: false,
                error: null
            });
        } catch (error) {
            setState(prev => ({
                ...prev,
                loading: false,
                error: 'Không thể tải dữ liệu. Vui lòng thử lại.'
            }));
        }
    }, []);

    return { ...state, loadData };
}