'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import {useEnsureProfile} from "@/lib/useEnsureProfile";

export default function DashboardPage() {
    const [user, setUser] = useState<any>(null);
    const router = useRouter();

    useEnsureProfile();

    useEffect(() => {
        supabase.auth.getUser().then(({ data }) => {
            if (!data?.user) router.push('/login');
            setUser(data.user);
        });
    }, [router]);

    return (
        <div className="w-[80vw] mx-auto py-8">
            <h1 className="text-2xl font-bold">Welcome, {user?.email}</h1>
        </div>
    );
}
