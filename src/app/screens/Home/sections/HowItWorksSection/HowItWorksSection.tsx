import { CalendarCheckIcon, SearchIcon, SmileIcon } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";

export const HowItWorksSection = () => {
  const steps = [
    {
      title: "Browse and select",
      description:
        "Choose from our wide range of premium cars, select the pickup and return dates and locations that suit you best.",
      icon: <SearchIcon className="w-6 h-6" />,
    },
    {
      title: "Book and confirm",
      description:
        "Book your desired car with just a few clicks and receive an instant confirmation via email or SMS.",
      icon: <CalendarCheckIcon className="w-6 h-6" />,
    },
    {
      title: "Enjoy your ride",
      description:
        "Pick up your car at the designated location and enjoy your premium driving experience with our top-quality service.",
      icon: <SmileIcon className="w-6 h-6" />,
    },
  ];

  return (
    <section className="relative w-full py-20">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center mb-16">
          <h2 className="font-bold text-5xl tracking-[-0.96px] leading-[62.4px] text-[#0f0f0f] mb-6 z-10">
            How it works
          </h2>
          <p className="max-w-[720px] font-medium text-lg text-center tracking-[-0.36px] leading-[28.8px] text-[#0f0f0f] z-10">
            Renting a luxury car has never been easier. Our streamlined process
            makes it simple for you to book and confirm your vehicle of choice
            online
          </p>
        </div>

        <div className=" h-[600px] flex justify-between gap-8 overflow-hidden z-10">
          <div className="absolute bg-neutral-100 w-[75%] h-[650px] right-0 top-64 rounded-2xl z-5 "></div>
          <div className="z-20 w-full lg:w-1/2 flex flex-col gap-6">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="border border-[#0000001a] rounded-3xl bg-white"
              >
                <CardContent className="p-8 flex">
                  <div className="w-[54px] h-[106px] bg-neutral-100 rounded-2xl flex items-center justify-center mr-6">
                    <div className="text-black">{step.icon}</div>
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-black leading-9 mb-4">
                      {step.title}
                    </h3>
                    <p className="font-normal text-lg text-black tracking-[-0.36px] leading-[28.8px]">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="w-[100%] lg:w-[70%] right-0">
            <img
              className="w-full h-auto object-cover relative z-20 "
              alt="Luxury car"
              src="/image-35.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
