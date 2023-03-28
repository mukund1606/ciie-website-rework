import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import slideData from "@/data/SliderData";

export default function Cards({ isAutoSlide = true }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slideData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slideData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (isAutoSlide) {
    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 2500);
      return () => clearInterval(interval);
    }, [currentIndex]);
  }

  return (
    <>
      {
        // PreCache Images
        slideData !== undefined &&
          slideData.map((image) => (
            <img
              src={image.image}
              alt={image.image}
              key={image.image}
              className="hidden"
            />
          ))
      }
      {slideData !== undefined && (
        <div className="w-full event">
          <div className="relative md:p-5 w-full lg:w-[80%] xl:w-[75%] lg:mx-auto group">
            <div
              style={{
                backgroundImage: `url(${slideData[currentIndex].image})`,
              }}
              className="w-full duration-500 bg-center bg-cover aspect-video rounded-2xl"
            ></div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 m-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 m-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
