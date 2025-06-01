//'use server';

import {supabase} from "@/lib/supabase";

export interface Category {
    id: number,
    name: string,
    active: boolean,
    description: string,
    created_at: Date,
}

export interface Car {
    id: number,
    brand: string,
    model: string,
    year: number,
    vehicleType: string,
    transmission: string,
    fuel_type: string,
    seats: number,
    price_per_day: number,
    imageUrl: string,
    features: string[],
    available: boolean,
    categoryId: number,
    created_at: Date,
}

export interface CarWithCategory extends Car {
    category: Category;
}

export async function getAllCategories(): Promise<Category[]> {
    const {data, error} = await supabase
        .from('categories')
        .select('*')
        .order('created_at', {ascending: true});

    if (error) {
        console.log("Error fetching categories");
        throw error;
    }

    return data || [];
}

export async function getAllCars(limit: number = 6, offset: number = 0): Promise<{
    cars: CarWithCategory[];
    total: number
}> {
    const {count} = await supabase
        .from('cars')
        .select('*', {count: 'exact', head: true});

    const {
        data,
        error
    } = await supabase
        .from('cars')
        .select(`*, category:categories(*)`)
        .order('created_at', {ascending: true})
        .range(offset, offset + limit - 1);

    if (error) {
        console.log("Error fetching cars");
        throw error;
    }

    return {
        cars: data || [],
        total: count || 0,
    };
}

export async function getCarsByCategoryId(categoryId: number, limit: number = 6, offset: number = 0): Promise<{
    cars: CarWithCategory[], total: number
}> {
    const {count} = await supabase
        .from('cars')
        .select('*', {count: 'exact', head: true})
        .eq('category_id', categoryId);

    const {data, error} = await supabase
        .from('cars')
        .select(`*, category:categories(*)`)
        .eq('category_id', categoryId)
        .order('created_at', {ascending: true})
        .range(offset, offset + limit - 1);

    if (error) {
        console.log("Error fetching cars by categoryId", error);
        throw error;
    }

    return {
        cars: data || [],
        total: count || 0
    }
}

export async function getCarsByCategoryDes(categoryDes: string, limit: number = 6, offset: number = 0): Promise<{ cars: CarWithCategory[], total: number}>{
    const {data: category} = await supabase.from('categories').select('id').eq('description', categoryDes).single();

    if (!category) {
        return { cars: [], total: 0 };
    }

    return getCarsByCategoryId(category.id, limit, offset);
}