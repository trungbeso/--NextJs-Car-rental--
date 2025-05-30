import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Service data for mapping
const services = [
  {
    icon: "/stars-01.svg",
    iconAlt: "Stars",
    title: "Quality Choice",
    description:
      "We offer a wide range of high-quality vehicles to choose from, including luxury cars, SUVs, vans, and more.",
  },
  {
    icon: "/coins-hand.svg",
    iconAlt: "Coins hand",
    title: "Affordable Prices",
    description:
      "Our rental rates are highly competitive and affordable, allowing our customers to enjoy their trips without breaking the bank.",
  },
  {
    icon: "/check-verified-01.svg",
    iconAlt: "Check verified",
    title: "Convenient Online Booking",
    description:
      "With our easy-to-use online booking system, customers can quickly and conveniently reserve their rental car from anywhere, anytime.",
  },
];

export const ServicesBenefitsSection = (): JSX.Element => {
  return (
    <section className="w-full py-24 bg-[#0f0f0f]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 mb-16">
          <h2 className="font-['Figtree',Helvetica] font-bold text-white text-5xl tracking-[-0.96px] leading-[62.4px]">
            Our Services &amp; Benefits
          </h2>
          <p className="max-w-[720px] font-['Figtree',Helvetica] font-medium text-white text-lg text-center tracking-[-0.36px] leading-[28.8px]">
            To make renting easy and hassle-free, we provide a variety of
            services and advantages. We have you covered with a variety of
            vehicles and flexible rental terms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-transparent border-none">
              <CardContent className="flex flex-col items-center gap-5 p-0">
                <div className="relative w-14 h-14 bg-white rounded-[28px] border-8 border-solid border-[#ffffffe6] flex items-center justify-center">
                  <img
                    className="w-6 h-6"
                    alt={service.iconAlt}
                    src={service.icon}
                  />
                </div>
                <div className="flex flex-col items-center gap-2 w-full">
                  <h3 className="font-['Figtree',Helvetica] font-semibold text-white text-xl text-center leading-[30px] tracking-[0]">
                    {service.title}
                  </h3>
                  <p className="font-['Figtree',Helvetica] font-normal text-[#d6d6d6] text-base text-center tracking-[0] leading-6">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
