import { ArrowRightIcon } from "lucide-react";
import React, {useEffect, useState} from "react";
import {Card, CardContent} from "@/app/ui/card";
import {Button} from "@/app/ui/button";
import {
  CarWithCategory,
  Category,
  getAllCars,
  getAllCategories,
  getCarsByCategoryDes
} from "@/lib/queries/supabase-query";
import Pagination from "@/app/components/sections/Pagination/Pagination";

export interface CategoryWithActive extends Category {
  active: boolean;
}

export const CarShowcaseSection = () => {
  const [categories, setCategories] = useState<CategoryWithActive[]>([]);
  const [cars, setCars] = useState<CarWithCategory[]>([]);
  const [featureCarId, setFeatureCarId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCars, setTotalCars] = useState(0);
  const [showPagination, setShowPagination] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const INITIAL_LIMIT = 6;
  const EXTENDED_LIMIT = 9;

  useEffect(() => { loadInitialData() }, []);

  useEffect(() => {
    if (categories.length > 0) {
      loadCars();
    }
  }, [categories, currentPage, showPagination]);

  const loadInitialData = async () => {
    try {
      setLoading(true);
      const categoriesData = await getAllCategories();

      const categoriesWithActive = categoriesData.map((category, index) => ({
        ...category, active: index === 0
      }));
      setCategories(categoriesWithActive);
    } catch (error) {
      setError('Không thể tải dữ liệu. Vui lòng thử lại.');
      console.error('Error loading categories ',error);
    } finally {
      setLoading(false);
    }
  };

  const loadCars = async () => {
    try {
      const activeCategory = categories.find(category => category.active);
      const limit = showPagination ? EXTENDED_LIMIT : INITIAL_LIMIT;
      const offset = showPagination ? (currentPage - 1) * EXTENDED_LIMIT : 0;

      let result;
      if (activeCategory) {
        result = await getCarsByCategoryDes(activeCategory.description, limit, offset);
        console.log('-========== result cars', result);
      } else {
        result = await getAllCars(limit, offset);
        console.log('-========== result cars', result);
      }

      setCars(result.cars);
      setTotalCars(result.total);

      if (result.cars.length > 0 && !featureCarId) {
        const featureCar = result.cars.find(car => car.features) || result.cars[0];
        setFeatureCarId(featureCar.id);
      }
    } catch (err) {
      setError('Không thể tải danh sách xe. Vui lòng thử lại.');
      console.error('Error loading cars ', err);
    } finally {
      setLoading(false);
    }
  }

  const handleCategoryOnclick = (categoryId: number) => {
    setCategories(prevCategories => prevCategories.map(category => ({
      ...category, active: category.id === categoryId
    })));
    setCurrentPage(1);
    setShowPagination(false);
    setFeatureCarId(null);
  };

  const handleCarClick = (carId: number) => {
    setFeatureCarId(carId);
  }

  const handleShowMore = () => {
    setShowPagination(true);
    setCurrentPage(1);
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  }

  const totalPages = Math.ceil(totalCars / EXTENDED_LIMIT);
  const shouldShowSeeMore = !showPagination && totalCars > INITIAL_LIMIT;

  if (loading && categories.length === 0) {
    return (
        <section className="w-full py-24 bg-neutral-100">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="flex justify-center items-center h-64">
              <div className="text-lg">Đang tải...</div>
            </div>
          </div>
        </section>
    );
  }

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
            {categories.map((category) => (
                <Button
                    key={category.id}
                    onClick={() => handleCategoryOnclick(category.id)}
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

          {/* Loading State for Cars */}
          {loading && (
              <div className="flex justify-center items-center py-12">
                <div className="text-lg">Đang tải xe...</div>
              </div>
          )}

          {/* Car Grid */}
          {!loading && cars.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cars.map((car) => (
                    <Card
                        key={car.id}
                        onClick={() => handleCarClick(car.id)}
                        className={`rounded-3xl overflow-hidden border cursor-pointer transition-all duration-200 ${
                            car.id === featureCarId
                                ? "border-black shadow-[0px_8px_8px_-4px_#10182808,0px_8px_24px_#10182814]"
                                : "border-[#0000001a] hover:border-gray-300"
                        }`}
                    >
                      <div className="p-[7px]">
                        <img
                            className="w-full h-[260px] object-cover rounded-2xl"
                            alt={car.brand}
                            src={car.imageUrl}
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex flex-col gap-4">
                          <div className="flex flex-col gap-3">
                            <h3 className="opacity-80 font-['Figtree',Helvetica] font-semibold text-black text-xl leading-[30px]">
                              {car.brand} {car.model} {car.year}
                            </h3>
                            <div className="font-['Figtree',Helvetica] text-[32px] leading-[38.4px]">
                        <span className="font-extrabold text-black">
                          ${car.price_per_day}
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
                            1000
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
                            {car.transmission}
                          </span>
                              </div>

                              <div className="flex flex-col items-center gap-1.5">
                                <img
                                    className="w-5 h-5"
                                    alt="Users"
                                    src="/users-01.svg"
                                />
                                <span className="font-['Figtree',Helvetica] font-medium text-black text-sm leading-[21px]">
                            {car.seats}
                          </span>
                              </div>

                              <div className="flex flex-col items-center gap-1.5 w-14">
                                <img
                                    className="w-5 h-5"
                                    alt="Gas station"
                                    src="/gas-station.svg"
                                />
                                <span className="font-['Figtree',Helvetica] font-medium text-black text-sm leading-[21px]">
                            {car.fuel_type}
                          </span>
                              </div>
                            </div>
                          </div>

                          <Button
                              variant={car.id === featureCarId ? "default" : "outline"}
                              className={`w-full rounded-[32px] mt-4 ${
                                  car.id === featureCarId
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
          )}

          {/* No Cars Message */}
          {!loading && cars.length === 0 && (
              <div className="flex justify-center items-center py-12">
                <div className="text-lg text-gray-500">Không có xe nào trong danh mục này.</div>
              </div>
          )}

          {/* See More Button */}
          {shouldShowSeeMore && (
              <div className="flex justify-center mt-12">
                <Button
                    onClick={handleShowMore}
                    className="bg-[#0f0f0f] text-white rounded-[64px] px-10 py-4 h-auto"
                >
              <span className="font-['Figtree',Helvetica] font-bold text-base leading-6 mr-2">
                Xem Thêm
              </span>
                  <ArrowRightIcon className="w-6 h-6 inline" />
                </Button>
              </div>
          )}

          {/* Pagination */}
          {showPagination && (
              <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
              />
          )}
        </div>
      </section>
  );
};