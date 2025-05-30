import { CustomerTestimonialsSection } from "@/components/sections/CustomerTestimonialsSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { CarShowcaseSection } from "@/components/sections/CarShowcaseSection";
import { ServicesBenefitsSection } from "@/components/sections/ServicesBenefitsSection";
import Hero from "@/components/sections/Hero";
import Header from "@/components/sections/HeaderSection";

export default function Home() {
  return (
    <main className="bg-[#FFFFFFED] flex flex-col items-center w-full overflow-x-hidden">
      <Header />
      <Hero />
      <div className="w-[80vw] mx-auto">
        <CarShowcaseSection />
        <HowItWorksSection />
      </div>

      <ServicesBenefitsSection />

      <div className="w-[80vw] mx-auto">
        <section className="w-full mt-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-['Figtree',Helvetica] font-bold text-[#0f0f0f] text-[40px] tracking-[-0.80px] leading-[52px]">
              Khách Hàng Nói Gì Về Chúng Tôi
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
            "Tôi thực sự ấn tượng với chất lượng dịch vụ mà công ty cho thuê xe
            này mang lại. Quy trình thuê xe diễn ra suôn sẻ và dễ dàng, chiếc xe
            tôi thuê cũng trong tình trạng hoàn hảo. Đội ngũ nhân viên thân
            thiện và nhiệt tình hỗ trợ, tôi cảm thấy được chăm sóc chu đáo trong
            suốt thời gian thuê xe. Tôi chắc chắn sẽ giới thiệu công ty này cho
            bất cứ ai đang tìm kiếm một trải nghiệm thuê xe cao cấp."
          </div>

          <div className="flex items-center gap-6 mb-16">
            <img
              className="w-20 h-20 object-cover rounded-full"
              alt="Customer"
              src="/ellipse-13.svg"
            />
            <div className="flex flex-col gap-1">
              <div className="font-['Figtree',Helvetica] font-bold text-[#0f0f0f] text-2xl tracking-[-0.48px] leading-9">
                Phan Bảo Long
              </div>
              <div className="font-['Figtree',Helvetica] text-xl tracking-[-0.40px] leading-[30px]">
                <span className="text-[#0f0f0f]/80 tracking-[-0.08px]">
                  From{" "}
                </span>
                <span className="font-semibold text-[#0f0f0f]/80 tracking-[-0.08px]">
                  6XXP+4V9, Cửa Dương, Phú Quốc, Kiên Giang{" "}
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
}