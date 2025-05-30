
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "lucide-react";
import React from "react";

export const FooterSection = () => {
  // Navigation links data
  const navLinks = [
    { title: "Rent", href: "#" },
    { title: "Share", href: "#" },
    { title: "About us", href: "#" },
    { title: "Contact", href: "#" },
  ];

  // Social media icons data
  const socialIcons = [
    { icon: <FacebookIcon className="h-6 w-6" />, alt: "Facebook" },
    { icon: <TwitterIcon className="h-6 w-6" />, alt: "Twitter" },
    { icon: <InstagramIcon className="h-6 w-6" />, alt: "Instagram" },
    { icon: <YoutubeIcon className="h-6 w-6" />, alt: "Youtube" },
  ];

  return (
    <footer className="w-full h-[113px] bg-[#0f0f0f]">
      <div className="max-w-[80vw] mx-auto h-full flex items-center justify-between">
        {/* Brand logo */}
        <img src="/heading.svg" alt="LUXEDRIVE" className="h-4" />

        {/* Navigation links */}
        <nav className="flex items-center gap-10">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="[font-family:'Figtree',Helvetica] font-normal text-text-gray-300 text-sm tracking-[0] leading-6"
            >
              {link.title}
            </a>
          ))}
        </nav>

        {/* Social media icons */}
        <div className="flex items-center gap-4">
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href="#"
              aria-label={social.alt}
              className="text-white hover:text-gray-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};