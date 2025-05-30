import { CalendarCheckIcon, SearchIcon, SmileIcon } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";

export const HowItWorksSection = () => {
  const steps = [
    {
      title: "Tìm kiếm chiếc xe dành cho bạn",
      description:
        "Chọn từ bộ sưu tập xe cao cấp đa dạng của chúng tôi, sau đó chọn ngày và địa điểm nhận, trả xe phù hợp nhất với bạn.",
      icon: <SearchIcon className="w-6 h-6" />,
    },
    {
      title: "Đặt xe và Xác nhận",
      description:
        "Đặt chiếc xe bạn muốn chỉ với vài cú nhấp chuột và nhận xác nhận ngay lập tức qua email hoặc SMS.",
      icon: <CalendarCheckIcon className="w-6 h-6" />,
    },
    {
      title: "Tận hưởng chuyến đi",
      description:
        "Nhận xe tại địa điểm đã định và tận hưởng trải nghiệm lái xe cao cấp với dịch vụ chất lượng hàng đầu của chúng tôi.",
      icon: <SmileIcon className="w-6 h-6" />,
    },
  ];

  return (
    <section className="relative w-full py-20">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center mb-16">
          <h2 className="font-bold text-5xl tracking-[-0.96px] leading-[62.4px] text-[#0f0f0f] mb-6 z-10">
            Cách Thức Hoạt Động
          </h2>
          <p className="max-w-[720px] font-medium text-lg text-center tracking-[-0.36px] leading-[28.8px] text-[#0f0f0f] z-10">
            Việc thuê một chiếc xe hạng sang chưa bao giờ dễ dàng hơn thế. Quy
            trình tinh gọn của chúng tôi giúp bạn dễ dàng đặt và xác nhận chiếc
            xe mình muốn.
          </p>
        </div>

        <div className=" h-[600px] pl-2 pt-2 flex justify-between gap-8 overflow-hidden z-10">
          <div className="absolute bg-neutral-100 w-[75%] h-[650px] right-0 top-64 rounded-2xl z-5 "></div>
          <div className="z-20 w-full lg:w-1/2 flex flex-col gap-6">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="border border-[#0000001a] rounded-3xl bg-white"
              >
                <CardContent className="p-8 flex items-center justify-center">
                  <div className="py-8 px-1.5 bg-neutral-100 rounded-2xl flex flex-col items-center justify-center mr-6">
                    <div className="text-black">{step.icon}</div>
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-black leading-9 mb-4 pointer-events-none">
                      {step.title}
                    </h3>
                    <p className="font-normal text-lg text-black tracking-[-0.36px] leading-[28.8px] pointer-events-none">
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
