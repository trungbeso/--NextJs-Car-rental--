'use client';

import { useEffect } from 'react';
import {supabase} from "@/lib/supabase";

export const useEnsureProfile = () => {
    useEffect(() => {
        const ensureProfile = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser();
            if (!user) return;

            // Kiểm tra xem đã có profile chưa
            const { data: profile } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', user.id)
                .single();

            if (!profile) {
                const { full_name, avatar_url } = user.user_metadata;

                // Tạo mới profile
                await supabase.from('profiles').insert({
                    id: user.id,
                    full_name: full_name || user.email,
                    avatar_url,
                });
            }
        };

        ensureProfile();
    }, []);
};
