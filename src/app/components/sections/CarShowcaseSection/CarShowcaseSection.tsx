import { ArrowRightIcon } from "lucide-react";
import React, { useState } from "react";
import {Card, CardContent} from "@/app/ui/card";
import {Button} from "@/app/ui/button";

export const CarShowcaseSection = () => {
  const [carCategories, setCarCategories] = useState([
    { id: "popular", name: "Xe Phổ Biến", active: true },
    { id: "luxury", name: "Xe Hạng Sang", active: false },
    { id: "vintage", name: "Xe Cổ Điển", active: false },
    { id: "family", name: "Xe Gia Đình", active: false },
    { id: "offroad", name: "Xe Địa Hình", active: false },
  ]);
  const [cardStatus, setCardStatus] = useState([
    {
      id: 1,
      name: "Audi A8 L 2022",
      price: 78.9,
      image: "/rectangle-85-1.svg",
      specs: {
        mileage: "4,000",
        transmission: "Auto",
        capacity: "4 Person",
        fuelType: "Electric",
      },
      featured: false,
    },
    {
      id: 2,
      name: "Nissan Maxima Platinum 2022",
      price: 78.9,
      image: "/rectangle-85-4.svg",
      specs: {
        mileage: "4,000",
        transmission: "Auto",
        capacity: "4 Person",
        fuelType: "Electric",
      },
      featured: true,
    },
    {
      id: 3,
      name: "Porsche Cayenne GTS 2022",
      price: 78.9,
      image: "/rectangle-85.svg",
      specs: {
        mileage: "4,000",
        transmission: "Auto",
        capacity: "4 Person",
        fuelType: "Electric",
      },
      featured: false,
    },
    {
      id: 4,
      name: "BMW M8 Coupe 2022",
      price: 78.9,
      image: "/rectangle-85-3.svg",
      specs: {
        mileage: "4,000",
        transmission: "Auto",
        capacity: "4 Person",
        fuelType: "Electric",
      },
      featured: false,
    },
    {
      id: 5,
      name: "BMW X7 M50i 2022",
      price: 78.9,
      image: "/rectangle-85-2.svg",
      specs: {
        mileage: "4,000",
        transmission: "Auto",
        capacity: "4 Person",
        fuelType: "Electric",
      },
      featured: false,
    },
    {
      id: 6,
      name: "Porsche Cayenne GTS 2022",
      price: 78.9,
      image: "/rectangle-85-5.svg",
      specs: {
        mileage: "4,000",
        transmission: "Auto",
        capacity: "4 Person",
        fuelType: "Electric",
      },
      featured: false,
    },
  ]);

  const handleCardStatusChange = (id: number) => {
    setCardStatus((prevCards) =>
      prevCards.map((card) => ({
        ...card,
        featured: card.id === id,
      }))
    );
  };

  const handleOnCategoryClick = (categoryId: string) => {
    setCarCategories((prevCategories) =>
      prevCategories.map((category) => ({
        ...category,
        active: category.id === categoryId,
      }))
    );
  };

  return (
    <section className="w-full py-24 bg-neutral-100 border-none shadow-[0px_8px_8px_-4px_#10182808,0px_8px_24px_#10182814]">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-6 mb-12">
          <h2 className="font-['Figtree',Helvetica] font-bold text-[#0f0f0f] text-5xl tracking-[-0.96px] leading-[62.4px] text-center">
            Bộ Sưu Tập Xe Ấn Tượng Của Chúng Tôi
          </h2>
          <p className="max-w-2xl font-['Figtree',Helvetica] font-medium text-[#0f0f0f] text-lg text-center tracking-[-0.36px] leading-[28.8px]">
            Từ những chiếc sedan thanh lịch đến xe thể thao mạnh mẽ, tất cả đều
            được chọn lọc kỹ lưỡng để mang đến cho bạn trải nghiệm lái tuyệt vời
            nhất.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {carCategories.map((category) => (
            <Button
              key={category.id}
              onClick={() => handleOnCategoryClick(category.id)}
              variant={category.active ? "default" : "outline"}
              className={`rounded-full px-[19px] py-3 h-auto ${
                category.active
                  ? "bg-[#0f0f0f] text-white"
                  : "bg-white text-black border-[#0000000d]"
              }`}
            >
              <span className="font-['Figtree',Helvetica] font-medium text-lg tracking-[-0.36px] leading-[26px]">
                {category.name}
              </span>
            </Button>
          ))}
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardStatus.map((car) => (
            <Card
              key={car.id}
              onClick={() => handleCardStatusChange(car.id)}
              className={`rounded-3xl overflow-hidden border ${
                car.featured
                  ? "border-black shadow-[0px_8px_8px_-4px_#10182808,0px_8px_24px_#10182814]"
                  : "border-[#0000001a]"
              }`}
            >
              <div className="p-[7px]">
                <img
                  className="w-full h-[260px] object-cover rounded-2xl"
                  alt={car.name}
                  src={car.image}
                />
              </div>
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-3">
                    <h3 className="opacity-80 font-['Figtree',Helvetica] font-semibold text-black text-xl leading-[30px]">
                      {car.name}
                    </h3>
                    <div className="font-['Figtree',Helvetica] text-[32px] leading-[38.4px]">
                      <span className="font-extrabold text-black">
                        {car.price.toFixed(2)}
                      </span>
                      <span className="font-semibold text-[#00000080] text-base leading-[19.2px]">
                        /day
                      </span>
                    </div>
                  </div>

                  <div className="bg-[#f6f6f6] rounded-2xl p-4">
                    <div className="flex justify-between opacity-70">
                      <div className="flex flex-col items-center gap-1.5 w-14">
                        <img
                          className="w-5 h-5"
                          alt="Speedometer"
                          src="/speedometer-01.svg"
                        />
                        <span className="font-['Figtree',Helvetica] font-medium text-black text-sm leading-[21px]">
                          {car.specs.mileage}
                        </span>
                      </div>

                      <div className="flex flex-col items-center gap-1.5 w-14">
                        <div className="relative w-5 h-5">
                          <div className="absolute w-4 h-[15px] top-[3px] left-0.5">
                            <div className="top-0 left-0 absolute w-[5px] h-[5px] rounded-[2.42px] border-[1.5px] border-solid border-[#0f0f0f]" />
                            <div className="top-0 left-1.5 absolute w-[5px] h-[5px] rounded-[2.42px] border-[1.5px] border-solid border-[#0f0f0f]" />
                            <div className="top-0 left-3 absolute w-[5px] h-[5px] rounded-[2.42px] border-[1.5px] border-solid border-[#0f0f0f]" />
                            <div className="top-2.5 left-0 absolute w-[5px] h-[5px] rounded-[2.42px] border-[1.5px] border-solid border-[#0f0f0f]" />
                            <div className="top-2.5 left-1.5 absolute w-[5px] h-[5px] rounded-[2.42px] border-[1.5px] border-solid border-[#0f0f0f]" />
                            <img
                              className="absolute w-0.5 h-2 top-[3px] left-0.5"
                              alt="Path"
                              src="/path-1.svg"
                            />
                            <img
                              className="absolute w-0.5 h-2 top-[3px] left-2"
                              alt="Path"
                              src="/path-1.svg"
                            />
                            <img
                              className="absolute w-[13px] h-[5px] top-[3px] left-0.5"
                              alt="Path"
                              src="/path.svg"
                            />
                          </div>
                        </div>
                        <span className="font-['Figtree',Helvetica] font-medium text-black text-sm leading-[21px]">
                          {car.specs.transmission}
                        </span>
                      </div>

                      <div className="flex flex-col items-center gap-1.5">
                        <img
                          className="w-5 h-5"
                          alt="Users"
                          src="/users-01.svg"
                        />
                        <span className="font-['Figtree',Helvetica] font-medium text-black text-sm leading-[21px]">
                          {car.specs.capacity}
                        </span>
                      </div>

                      <div className="flex flex-col items-center gap-1.5 w-14">
                        <img
                          className="w-5 h-5"
                          alt="Gas station"
                          src="/gas-station.svg"
                        />
                        <span className="font-['Figtree',Helvetica] font-medium text-black text-sm leading-[21px]">
                          {car.specs.fuelType}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant={car.featured ? "default" : "outline"}
                    className={`w-full rounded-[32px] mt-4 ${
                      car.featured
                        ? "bg-black text-white"
                        : "bg-white text-black border-black"
                    }`}
                  >
                    <span className="font-['Figtree',Helvetica] font-semibold text-base">
                      Rent Now
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* See All Button */}
        <div className="flex justify-center mt-12">
          <Button className="bg-[#0f0f0f] text-white rounded-[64px] px-10 py-4 h-auto ">
            <span className="font-['Figtree',Helvetica] font-bold text-base leading-6 mr-2">
              Xem Thêm
            </span>
            <ArrowRightIcon className="w-6 h-6 inline" />
          </Button>
        </div>
      </div>
    </section>
  );
};
