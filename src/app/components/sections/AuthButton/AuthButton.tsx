'use client';

import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export const AuthButton = () => {
    const router = useRouter();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/login');
    };

    return <button onClick={handleLogout}>Log Out</button>;
};
