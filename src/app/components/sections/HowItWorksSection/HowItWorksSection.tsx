import { CalendarCheckIcon, SearchIcon, SmileIcon } from "lucide-react";
import { Card, CardContent } from "@/app/ui/card";

export const HowItWorksSection = () => {
  const steps = [
    {
      title: "Tìm kiếm chiếc xe dành cho bạn",
      description:
        "Chọn từ bộ sưu tập xe cao cấp đa dạng của chúng tôi, sau đó chọn ngày và địa điểm nhận, trả xe phù hợp nhất với bạn.",
      icon: <SearchIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      title: "Đặt xe và Xác nhận",
      description:
        "Đặt chiếc xe bạn muốn chỉ với vài cú nhấp chuột và nhận xác nhận ngay lập tức qua email hoặc SMS.",
      icon: <CalendarCheckIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      title: "Tận hưởng chuyến đi",
      description:
        "Nhận xe tại địa điểm đã định và tận hưởng trải nghiệm lái xe cao cấp với dịch vụ chất lượng hàng đầu của chúng tôi.",
      icon: <SmileIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12 sm:mb-16 text-center">
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-[#0f0f0f] mb-4 sm:mb-6 max-w-4xl">
            Cách Thức Hoạt Động
          </h2>
          <p className="max-w-2xl font-medium text-base sm:text-lg text-center tracking-tight leading-relaxed text-[#0f0f0f] px-4">
            Việc thuê một chiếc xe hạng sang chưa bao giờ dễ dàng hơn thế. Quy
            trình tinh gọn của chúng tôi giúp bạn dễ dàng đặt và xác nhận chiếc
            xe mình muốn.
          </p>
        </div>

        {/* Main Content */}
        <div className=" flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8">
          {/* Background Element */}
          <div className="absolute bg-neutral-100 w-full lg:w-3/4 lg:h-[570px] md:h-[450px] sm:h-full inset-0 lg:right-0 lg:top-45 lg:left-auto top-50 rounded-2xl -z-10"></div>

          {/* Steps Cards */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6 relative z-20 order-2 lg:order-1">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="border border-[#0000001a] rounded-2xl sm:rounded-3xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <CardContent className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center">
                  {/* Icon */}
                  <div className="mb-4 sm:mb-0 sm:mr-4 lg:mr-6 p-2 sm:py-6 sm:px-4 lg:py-8 lg:px-4 bg-neutral-100 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                    <div className="text-black">{step.icon}</div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-bold text-lg sm:text-xl lg:text-2xl text-black leading-tight mb-2 sm:mb-3 lg:mb-4">
                      {step.title}
                    </h3>
                    <p className="font-normal text-sm sm:text-base lg:text-lg text-black tracking-tight leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Image */}
          <div className="w-full sm:w-4/5 lg:w-3/5 xl:w-3/5 lg:top-10 relative z-20 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-full max-w-md sm:max-w-lg lg:max-w-none">
              <img
                className="w-full h-auto object-cover rounded-lg lg:rounded-none"
                alt="Luxury car"
                src="/image-35.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};