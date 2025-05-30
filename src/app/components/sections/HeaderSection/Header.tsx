import { Button } from '@/app/components/ui/button';
import React, { useEffect, useState } from 'react'

const Header = () => {
    const [showHeader, setShowHeader] = useState(false);
    
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
    <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          showHeader
            ? "translate-y-0 bg-[#0f0f0f]/80 backdrop-blur-sm"
            : "-translate-y-full"
        }`}
      >
        <div className="max-w-[80vw] mx-auto h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button className="flex flex-col gap-1.5">
              <span className="w-8 h-0.5 bg-white"></span>
              <span className="w-8 h-0.5 bg-white"></span>
            </button>
          </div>
          <img src="/heading.svg" alt="LUXEDRIVE" className="h-4" />
          <Button
            variant="outline"
            className="rounded-[48px] border bg-transparent backdrop-blur-[18px] text-white border-gray-700 shadow-md"
          >
            Login / Register
          </Button>
        </div>
      </header>
  )
}

export default Header;