import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Event from "@/components/Event";
import Loading from "@/components/Loading";
import { useRouter } from "next/router";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export default function EventDetails() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const { eventName } = router.query;
  const [isLoaded, setIsLoaded] = useState(false);
  const [eventData, setEventData] = useState(undefined);

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

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => {
        data = data.filter((event) => {
          if (event.folderName === eventName) return true;
        });
        if (data.length === 0) {
          setEventData(undefined);
        } else {
          setEventData(data[0]);
          setIsLoaded(true);
        }
      });
  }, [eventName]);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <>
      {!isLoaded ? (
        <Loading />
      ) : (
        <>
          {
            // PreCache Images
            eventData !== undefined &&
              eventData["images"].map((image) => (
                <img
                  src={image.srcLink}
                  alt={image.fileName}
                  key={image.fileID}
                  className="hidden"
                />
              ))
          }
          <Navbar />
          <div className="mb-16 events px-14">
            {eventData !== undefined && (
              <div className="flex flex-col items-center justify-center event">
                <div className="flex flex-col items-center justify-center w-4/5 text-center">
                  <h3 className="font-bold">{eventData.folderName}</h3>
                  <p className="p-5">{eventData.folderDescription}</p>
                </div>
                <div className="w-full">
                  <div className="relative p-5 lg:w-[80%] xl:w-[75%] lg:mx-auto group">
                    <div
                      style={{
                        backgroundImage: `url(${eventData.images[currentIndex].srcLink})`,
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
              </div>
            )}
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
