import { useState } from "react";
import Navbar from "@/components/Navbar";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export default function Event({ eventData }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? eventData.images.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === eventData.images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      {
        // PreCache Images
        eventData !== undefined &&
          eventData["images"].map((image) => (
            <img
              src={image.directLink}
              alt={image.fileName}
              key={image.directLink}
              className="hidden"
            />
          ))
      }
      {eventData !== undefined && (
        <div className="event">
          <div className="relative p-5 lg:w-[80%] xl:w-[75%] lg:mx-auto group">
            <div
              style={{
                backgroundImage: `url(${eventData.images[currentIndex].directLink})`,
              }}
              className="w-full duration-500 bg-center bg-cover aspect-video rounded-2xl"
            ></div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
