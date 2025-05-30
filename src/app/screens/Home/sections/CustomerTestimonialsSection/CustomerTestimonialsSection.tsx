import React from "react";
import { Button } from "../../../../components/ui/button";

export const CustomerTestimonialsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#0f0f0f] border-b border-[#ffffff1a] py-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-4">
        <div className="max-w-[492px]">
          <h2 className="font-bold text-white text-4xl leading-[46px] mb-5">
            Download our mobile app ⚡
          </h2>
          <p className="font-normal text-[#ffffffcc] text-base leading-[26px]">
            Get exclusive access to car rentals with our mobile app. Download
            now and experience convenience on the go.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          <Button
            variant="outline"
            className="h-[61px] w-[193px] bg-white rounded-[73px] p-0 flex items-center justify-center"
          >
            <img
              className="w-[140px] h-[35px]"
              alt="App store"
              src="/app-store.png"
            />
          </Button>

          <Button
            variant="outline"
            className="h-[61px] w-[202px] bg-white rounded-[73px] p-0 flex items-center justify-center"
          >
            <div className="relative w-[158px] h-[35px]">
              <img
                className="absolute w-[120px] h-[21px] top-[15px] left-[38px]"
                alt="Google Play text"
                src="/vector-2.svg"
              />
              <img
                className="absolute w-[54px] h-1.5 top-0 left-[39px]"
                alt="Vector"
                src="/vector.svg"
              />
              <img
                className="absolute w-[25px] h-7 top-[3px] left-0"
                alt="Google Play icon"
                src="/group-2.png"
              />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};
