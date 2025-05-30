import React, { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayedWords, setDisplayedWords] = useState<string[]>([]);
  const [imageScale, setImageScale] = useState(0.3);
  //   const headingWords =
  //     "Discover the world on wheels with our car rental service".split(" ");
  const headingWords =
    "Chúng tôi luôn đồng hành cùng bạn trên những chặng đường".split(" ");

  useEffect(() => {
    setIsLoaded(true);

    //animate image scale on start
    const startTime = Date.now();
    const duration = 3000;
    const startScale = 0.5;
    const endScale = 1;

    const scaleAnimation = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentScale = startScale + (endScale - startScale) * easeOut;

      setImageScale(currentScale);
      if (progress < 1) {
        requestAnimationFrame(scaleAnimation);
      }
    };
    // Animate words
    let currentIndex = -1;
    const wordInterval = setInterval(() => {
      if (currentIndex < headingWords.length) {
        setDisplayedWords((prev) => [...prev, headingWords[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(wordInterval);
      }
    }, 200);

    requestAnimationFrame(scaleAnimation);

    return () => {
      clearInterval(wordInterval);
    };
  }, []);

  return (
    <section className="w-full h-screen relative bg-black overflow-hidden flex items-center justify-center">
      <img
        className={`w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        alt="Car background"
        src="/image-23.png"
        style={{
          transform: `scale(${imageScale})`,
          width: "100vw",
          height: "100vh",
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="hero w-[982px] transform translate-y-[-250px] font-semibold text-white text-[64px] text-center leading-[76.8px]">
          {displayedWords.join(" ")}
        </div>
      </div>
    </section>
  );
};

export default Hero;
