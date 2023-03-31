import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Collage from "@/components/Collage";
import Link from "next/link";
import Loading from "@/components/Loading";
import { motion } from "framer-motion";
import Head from "next/head";

const EventBlock = ({ events, desc }) => {
  return (
    <>
      {events !== undefined && (
        <div>
          <h2 className="pb-5 text-center text-transparent bg-clip-text bg-gradient-to-tr from-lightTheme-primary to-lightTheme-secondary">
            {desc} Events
          </h2>
          <div className="flex flex-col flex-wrap items-center justify-around w-full gap-8 md:flex-row">
            {events.length === 0 && (
              <>
                <div className="flex flex-col items-center justify-center w-full max-w-4xl gap-4 p-5 text-center bg-lightTheme-black-50 dark:bg-opacity-20 dark:bg-darkTheme-white-50 bg-opacity-20 rounded-xl">
                  <h4>No Events</h4>
                  <p>There are no {desc} events</p>
                </div>
              </>
            )}
            {events.map((event) => {
              return (
                <Link
                  href={`/events/${event.folderName}`}
                  className="flex flex-col items-center justify-center gap-4 p-5 text-center duration-200 ease-in cursor-pointer bg-lightTheme-black-50 dark:bg-opacity-20 dark:bg-darkTheme-white-50 bg-opacity-20 rounded-xl hover:scale-110 saturate-150"
                  key={event._id}
                >
                  <div>
                    <h4>{event.folderName}</h4>
                  </div>
                  <Collage
                    className="z-10 aspect-video"
                    images={event.images}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default function Events() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [allData, setAllData] = useState(undefined);
  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => {
        setAllData(sortEvents(data));
        setIsLoaded(true);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Events | CIIE</title>
      </Head>
      {!isLoaded ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <motion.div
            className="p-4 mb-16 events md:m-6 lg:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
            viewport={{ once: true }}
          >
            {allData !== undefined && (
              <div>
                <EventBlock events={allData.ongoingEvents} desc="Ongoing" />
                <EventBlock events={allData.upcomingEvents} desc="Upcoming" />
                <EventBlock events={allData.pastEvents} desc="Past" />
              </div>
            )}
          </motion.div>
        </>
      )}
      <Footer />
    </>
  );
}

function sortEvents(events){
  events = events.sort((a, b) => {
    return new Date(b.eventDate) - new Date(a.eventDate);
  });
  const pastEvents = [];
  const upcomingEvents = [];
  const ongoingEvents = [];
  let today = new Date();
  today = new Date();
  events.forEach((event) => {
    const eventEndDate = new Date(
      String(event.endDate).split("Z")[0] + "+05:30"
    );
    const eventStartDate = new Date(
      String(event.startDate).split("Z")[0] + "+05:30"
    );
    if (eventEndDate < today) {
      pastEvents.push(event);
    } else if (eventStartDate > today) {
      upcomingEvents.push(event);
    } else {
      ongoingEvents.push(event);
    }
  });
  return { pastEvents, upcomingEvents, ongoingEvents };
};
