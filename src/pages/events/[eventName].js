import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import { useRouter } from "next/router";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Head from "next/head";
import Link from "next/link";

export default function EventDetails() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const { eventName } = router.query;
  const [isLoaded, setIsLoaded] = useState(false);
  const [isData, setIsData] = useState(false);
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
          if (event.folderName === eventName) {
            return true;
          }
        });
        if (data.length === 0) {
          setEventData(undefined);
          setIsData(false);
          setIsLoaded(true);
        } else {
          setEventData(data[0]);
          setIsData(true);
          setIsLoaded(true);
        }
      });
  }, [eventName]);

  // Auto Slide
  useEffect(() => {
    if (isData === false) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, isData]);

  return (
    <>
      <Head>
        <title>{eventName} | CIIE</title>
      </Head>
      {!isLoaded ? (
        <Loading />
      ) : isData ? (
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
          <div className="px-2 mb-16 md:px-6 lg-px-12 events">
            {eventData !== undefined && (
              <div className="flex flex-col items-center justify-center event">
                <div className="flex flex-col items-center justify-center w-4/5 text-center">
                  <h2 className="font-semibold text-center text-transparent bg-clip-text bg-gradient-to-tr from-lightTheme-primary to-lightTheme-secondary">
                    {eventData.folderName}
                  </h2>
                  <div>
                    <div>
                      <h4 className="inline">Event Date: </h4>
                      <span className="inline">
                        {new Date(eventData.startDate).toLocaleDateString()} -{" "}
                        {new Date(eventData.endDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div>
                      <h4 className="inline">Event Time: </h4>
                      <span className="inline">
                        {new Date(
                          new Date(eventData.startDate) - 19800000
                        ).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}{" "}
                        -{" "}
                        {new Date(
                          new Date(eventData.endDate) - 19800000
                        ).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                    <br />
                    <h4>Description</h4>
                    <p className="p-2 py-5">{eventData.folderDescription}</p>
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative lg:w-[80%] xl:w-[75%] lg:mx-auto group">
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
      ) : (
        <>
          <div className="flex flex-col items-center justify-center w-full h-screen gap-5">
            <h1 className="p-2">Event Not Found</h1>
            <Link href="/events">
              <h3>Click Me To Redirect to Events Page</h3>
            </Link>
          </div>
        </>
      )}
    </>
  );
}
