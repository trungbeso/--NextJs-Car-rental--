'use client';

import { useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function Callback() {
    const router = useRouter();

    useEffect(() => {
        const handleAuth = async () => {
            const { error } = await supabase.auth.getSession();
            if (error) console.error('Error during session fetch', error);
            router.push('/dashboard');
        };

        handleAuth();
    }, [router]);

    return <p>Redirecting...</p>;
}
