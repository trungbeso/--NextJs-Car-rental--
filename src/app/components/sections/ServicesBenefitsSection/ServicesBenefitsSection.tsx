import React from "react";
import { Card, CardContent } from "../../ui/card";

// Service data for mapping
const services = [
  {
    icon: "/stars-01.svg",
    iconAlt: "Stars",
    title: "Lựa Chọn Chất Lượng",
    description:
      "Chúng tôi cung cấp đa dạng các loại xe chất lượng cao để bạn lựa chọn, bao gồm xe hạng sang, SUV, xe van và nhiều hơn nữa.",
  },
  {
    icon: "/coins-hand.svg",
    iconAlt: "Coins hand",
    title: "Giá Cả Phải Chăng",
    description:
      "Mức giá thuê của chúng tôi rất cạnh tranh và phải chăng, giúp khách hàng tận hưởng chuyến đi mà không phải lo lắng về chi phí.",
  },
  {
    icon: "/check-verified-01.svg",
    iconAlt: "Check verified",
    title: "Đặt Xe Trực Tuyến Tiện Lợi",
    description:
      "Với hệ thống đặt xe trực tuyến dễ sử dụng, khách hàng có thể nhanh chóng và thuận tiện đặt xe thuê của mình từ bất cứ đâu, bất cứ lúc nào.",
  },
];

export const ServicesBenefitsSection = () => {
  return (
    <section className="w-full py-24 bg-[#0f0f0f]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 mb-16">
          <h2 className="font-['Figtree',Helvetica] font-bold text-white text-5xl tracking-[-0.96px] leading-[62.4px]">
            Dịch Vụ Và Lợi Ích Của Chúng Tôi
          </h2>
          <p className="max-w-[720px] font-['Figtree',Helvetica] font-medium text-white text-lg text-center tracking-[-0.36px] leading-[28.8px]">
            Để việc thuê xe trở nên dễ dàng và không phiền phức, chúng tôi mang
            đến nhiều dịch vụ và ưu điểm đa dạng. Chúng tôi luôn sẵn sàng phục
            vụ bạn với nhiều loại xe khác nhau và các điều khoản thuê linh hoạt.
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
