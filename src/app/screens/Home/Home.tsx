import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import  { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { CarShowcaseSection } from "./sections/CarShowcaseSection/CarShowcaseSection";
import { CustomerTestimonialsSection } from "./sections/CustomerTestimonialsSection";
import { FooterSection } from "./sections/FooterSection";
import { HowItWorksSection } from "./sections/HowItWorksSection/HowItWorksSection";
import { ServicesBenefitsSection } from "./sections/ServicesBenefitsSection";

export const Home = (): JSX.Element => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [displayedWords, setDisplayedWords] = useState<string[]>([]);
  const headingWords = "Discover the world on wheels with our car rental service".split(" ");

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const bannerHeight = window.innerHeight;
      setShowHeader(scrollPosition > bannerHeight * 0.3);
    };

    window.addEventListener('scroll', handleScroll);

    // Animate words
    let currentIndex = -1;
    const wordInterval = setInterval(() => {
      if (currentIndex < headingWords.length) {
        setDisplayedWords(prev => [...prev, headingWords[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(wordInterval);
      }
    }, 200);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(wordInterval);
    };
  }, []);

  return (
    <main className="bg-[#FFFFFFED] flex flex-col items-center w-full overflow-x-hidden">
      {/* Fixed Header */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          showHeader ? 'translate-y-0 bg-[#0f0f0f]/80 backdrop-blur-sm' : '-translate-y-full'
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
            className="rounded-[48px] border border-[#ffffff80] bg-transparent backdrop-blur-[18px] text-white border-gray-700 shadow-md"
          >
            Login / Register
          </Button>
        </div>
      </header>

      {/* Hero Section - Full Viewport */}
      <section className="w-full h-screen relative bg-[#0f0f0f] overflow-hidden">
        <img
          className={`w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          alt="Car background"
          src="/image-23.svg"
        />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[982px] transform translate-y-[-250px] font-['Figtree',Helvetica] font-bold text-white text-[64px] text-center leading-[76.8px]">
            {displayedWords.join(" ")}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="w-[80vw] mx-auto">
        <CarShowcaseSection />
        <HowItWorksSection />
      </div>

      <ServicesBenefitsSection />

      <div className="w-[80vw] mx-auto">
        <section className="w-full mt-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-['Figtree',Helvetica] font-bold text-[#0f0f0f] text-[40px] tracking-[-0.80px] leading-[52px]">
              What Our Customers Say
            </h2>
            <div className="flex items-start gap-4">
              <Button
                variant="outline"
                className="w-16 h-16 rounded-full border-2 border-[#c0c0c0] p-0"
              >
                <ArrowLeftIcon className="w-6 h-6" />
              </Button>
              <Button className="w-16 h-16 rounded-full bg-[#0f0f0f] p-0">
                <ArrowRightIcon className="w-6 h-6 text-white" />
              </Button>
            </div>
          </div>

          <div className="opacity-80 font-['Figtree',Helvetica] font-semibold text-[#0f0f0f] text-[32px] tracking-[-0.64px] leading-[48px] mb-16">
            "I was really impressed with the level of service I received from this car rental company. The process was smooth and easy, and the car I rented was in excellent condition. The staff was friendly and helpful, and I felt well taken care of throughout my rental period. I would definitely recommend this company to anyone looking for a premium car rental experience."
          </div>

          <div className="flex items-center gap-6 mb-16">
            <img
              className="w-20 h-20 object-cover rounded-full"
              alt="Customer"
              src="/ellipse-13.svg"
            />
            <div className="flex flex-col gap-1">
              <div className="font-['Figtree',Helvetica] font-bold text-[#0f0f0f] text-2xl tracking-[-0.48px] leading-9">
                Lokman Hossain
              </div>
              <div className="font-['Figtree',Helvetica] text-xl tracking-[-0.40px] leading-[30px]">
                <span className="text-[#0f0f0f]/80 tracking-[-0.08px]">
                  From{" "}
                </span>
                <span className="font-semibold text-[#0f0f0f]/80 tracking-[-0.08px]">
                  Texas
                </span>
              </div>
            </div>
          </div>

          <CustomerTestimonialsSection />
        </section>
      </div>

      <FooterSection />
    </main>
  );
};