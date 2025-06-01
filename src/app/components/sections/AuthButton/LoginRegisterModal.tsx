'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { X } from 'lucide-react';
import { Button } from '@/app/ui/button';

type Props = {
    mode: 'login' | 'register';
    onClose: () => void;
    onSwitchMode: (mode: 'login' | 'register') => void;
};

export default function LoginRegisterModal({ mode, onClose, onSwitchMode }: Props) {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleAuth = async () => {
        if (!emailOrPhone || !password) return;
        const isEmail = emailOrPhone.includes('@');

        if (mode === 'login') {
            if (isEmail) {
                await supabase.auth.signInWithPassword({ email: emailOrPhone, password });
            } else {
                await supabase.auth.signInWithOtp({ phone: emailOrPhone });
            }
        } else {
           if (isEmail) {
               await supabase.auth.signUp({
                   email: emailOrPhone,
                   password,
               });
           } else {
               await supabase.auth.signUp({
                   phone: emailOrPhone,
                   password
               })
           }
        }

        onClose();
    };

    const handleSSO = async (provider: 'google' | 'github' | 'facebook') => {
        await supabase.auth.signInWithOAuth({ provider });
    };

    return (
        <div className="fixed inset-0 bg-black/60 z-[999] flex justify-center items-center p-4 w-full">
            <div className="bg-white w-full max-w-6xl rounded-xl shadow-lg flex">
                {/* Left - Auth Form */}
                <div className="w-1/2 p-8">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold">{mode === 'login' ? 'Login' : 'Register'}</h2>
                        <button onClick={onClose}>
                            <X />
                        </button>
                    </div>
                    <input
                        className="w-full mb-3 p-2 border rounded"
                        placeholder="Email or Phone"
                        value={emailOrPhone}
                        onChange={(e) => setEmailOrPhone(e.target.value)}
                    />
                    <input
                        className="w-full mb-3 p-2 border rounded"
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button className="w-full mb-4" onClick={handleAuth}>
                        {mode === 'login' ? 'Login' : 'Register'}
                    </Button>

                    <div className="text-center text-sm text-gray-500 mb-2">or continue with</div>
                    <div className="flex justify-center gap-2">
                        <Button variant="outline" onClick={() => handleSSO('google')}>Google</Button>
                        <Button variant="outline" onClick={() => handleSSO('github')}>GitHub</Button>
                        <Button variant="outline" onClick={() => handleSSO('facebook')}>Facebook</Button>
                    </div>

                    <div className="mt-6 text-center text-sm">
                        {mode === 'login' ? (
                            <>
                                Don’t have an account?{" "}
                                <button onClick={() => onSwitchMode('register')} className="text-blue-500 cursor-pointer">Register</button>
                            </>
                        ) : (
                            <>
                                Already have an account?{" "}
                                <button onClick={() => onSwitchMode('login')} className="text-blue-500 cursor-pointer">Login</button>
                            </>
                        )}
                    </div>
                </div>

                {/* Right - Branding / Illustration */}
                <div className="hidden md:flex flex-1 bg-gray-100 rounded-r-xl items-center justify-center">
                    <img src="https://old.kiavietnam.com.vn/storage/product/k5/tien-ich/dl3-21my-ge-lhd-style-frontquarter.jpg" alt="Luxury Car" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
}
