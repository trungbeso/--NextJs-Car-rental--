import { ArrowRightIcon, CalendarIcon, MapPinIcon } from "lucide-react";
import {Card, CardContent} from "@/app/ui/card";
import {Button} from "@/app/ui/button";


export const BrandLogosSection = () => {
  // Data for the form fields
  const formFields = [
    {
      id: "pickup-location",
      label: "Pick-up Location",
      placeholder: "Search a location",
      icon: <MapPinIcon className="w-5 h-5" />,
      type: "location",
    },
    {
      id: "pickup-date",
      label: "Pick-up date",
      value: "12/12/2023",
      icon: <CalendarIcon className="w-5 h-5" />,
      type: "date",
    },
    {
      id: "dropoff-location",
      label: "Drop-off Location",
      placeholder: "Search a location",
      icon: <MapPinIcon className="w-5 h-5" />,
      type: "location",
    },
    {
      id: "dropoff-date",
      label: "Drop-off date",
      value: "12/12/2023",
      icon: <CalendarIcon className="w-5 h-5" />,
      type: "date",
    },
  ];

  return (
    <Card className="relative mx-auto w-full max-w-[1216px] bg-[#ffffffe6] rounded-2xl shadow-[0px_8px_8px_-4px_#10182808,0px_20px_24px_-4px_#10182814] backdrop-blur-[14px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(14px)_brightness(100%)]">
      <CardContent className="p-6 pt-[30px]">
        <div className="flex items-end gap-4">
          <div className="flex items-start gap-4 flex-1">
            {formFields.map((field) => (
              <div
                key={field.id}
                className={`flex flex-col items-start gap-2.5 ${
                  field.type === "date" ? "w-[180px]" : "flex-1"
                }`}
              >
                <label
                  htmlFor={field.id}
                  className="opacity-80 font-normal text-black text-base"
                >
                  {field.label}
                </label>

                <div className="flex flex-col items-start gap-2 p-4 w-full bg-white rounded-lg border border-solid border-[#0000001a]">
                  {field.type === "location" ? (
                    <div className="inline-flex items-center gap-3">
                      {field.icon}
                      <span className="opacity-80 font-normal text-black text-base leading-6">
                        {field.placeholder}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between w-full">
                      <span className="opacity-80 font-normal text-black text-base leading-6">
                        {field.value}
                      </span>
                      {field.icon}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <Button className="inline-flex items-center gap-2 px-6 py-4 bg-[#0f0f0f] rounded-[64px] text-white font-bold">
            Find a Vehicle
            <ArrowRightIcon className="w-[18px] h-[18px]" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
