'use client';

import {supabase} from "@/lib/supabase";

const LoginPage = () => {
    const handleLogin = async (provider: 'google' | 'github' | 'facebook') => {
        await supabase.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: `${location.origin}/auth/callback`,
            },
        });
    };

    return (
        <div className="space-y-4">
            <h1 className="text-xl font-bold">Login</h1>
            <button onClick={() => handleLogin('google')}>Login with Google</button>
            <button onClick={() => handleLogin('github')}>Login with GitHub</button>
            <button onClick={() => handleLogin('facebook')}>Login with Facebook</button>
        </div>
    );
};

export default LoginPage;
