import React, { useEffect, useState } from 'react'
import { Button } from "@/app/ui/button";
import Link from "next/link";
import LoginRegisterModal from "@/app/components/sections/AuthButton/LoginRegisterModal";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const bannerHeight = window.innerHeight;
      setShowHeader(scrollPosition > bannerHeight * 0.3);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <>
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${showHeader
        ? "translate-y-0 bg-[#0f0f0f]/80 backdrop-blur-sm"
        : "-translate-y-full"
        }`}
    >
      <div className="max-w-[80vw] mx-auto h-20 flex items-center justify-between relative">
        {/* Menu Button (Left) */}
        <div className="flex items-center gap-8 z-10">
          <button className="flex flex-col gap-1.5">
            <span className="w-8 h-0.5 bg-white"></span>
            <span className="w-8 h-0.5 bg-white"></span>
          </button>
        </div>

        {/* Centered Logo */}
        <button className="absolute inset-0 flex items-center justify-center z-0">
          <img
            src="/heading.svg"
            alt="LUXEDRIVE"
            className="h-4 pointer-cursor"
          />
        </button>

        {/* Login / Register Button (Right) */}
        <div className="z-10 flex gap-2">
          <Button
            variant="outline"
            className="rounded-[48px] border bg-transparent backdrop-blur-[18px] text-white border-gray-700 shadow-md"
            onClick={() => {
              setAuthMode('login');
              setIsModalOpen(true);
            }}
          >
            Login
          </Button>
          <Button
          variant='outline'
          className='rounded-[48px] border bg-transparent backdrop-blur-[18px] text-white border-gray-700 shadow-md'
          onClick={() => {
            setAuthMode('register');
            setIsModalOpen(true);
          }}>
            Register
          </Button>
        </div>
      </div>
    </header>
        {isModalOpen && (
            <LoginRegisterModal mode={authMode} onClose={() => setIsModalOpen(false)} onSwitchMode={(mode) => setAuthMode(mode)} />
        )}
      </>
  )
}

export default Header;