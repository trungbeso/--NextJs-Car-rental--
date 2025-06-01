import React, { useEffect, useState } from "react";
import AnimatedText from "../Animation/AnimatedTextProps";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
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

    requestAnimationFrame(scaleAnimation);

    return () => {
    };
  }, []);

  return (
    <section className="w-full h-screen relative bg-black overflow-hidden flex items-center justify-center">
      <img
        className={`w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 ${isLoaded ? "opacity-100" : "opacity-0"
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
        <div className="hero w-[982px] transform translate-y-[-100px] font-semibold text-white text-[64px] text-center leading-[76.8px]">
          <AnimatedText
            text="Chúng tôi luôn đồng hành cùng bạn trên những chặng đường"
            delayPerChar={0.03}
            className="mt-[-250px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
