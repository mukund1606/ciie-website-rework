import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Collage from "@/components/Collage";
import Event from "@/components/Event";
import Loading from "@/components/Loading";

const EventBlock = ({ events, desc, setIsEventOpen, setEventData }) => {
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
                <div className="flex flex-col items-center justify-center w-full gap-4 p-5 text-center bg-lightTheme-black-50 dark:bg-opacity-20 dark:bg-darkTheme-white-50 bg-opacity-20 rounded-xl">
                  <h4>No Events</h4>
                  <p>There are no {desc} events</p>
                </div>
              </>
            )}
            {events.map((event) => {
              return (
                <div
                  className="flex flex-col items-center justify-center gap-4 p-5 text-center duration-200 ease-in cursor-pointer bg-lightTheme-black-50 dark:bg-opacity-20 dark:bg-darkTheme-white-50 bg-opacity-20 rounded-xl hover:scale-110 saturate-150"
                  onClick={() => {
                    setIsEventOpen(true);
                    setEventData(event);
                  }}
                  key={event._id}
                >
                  <div>
                    <h4>{event.folderName}</h4>
                    <p>{event.folderDescription}</p>
                  </div>
                  <Collage
                    className="z-10 aspect-video"
                    images={event.images}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default function Events() {
  const [isEventOpen, setIsEventOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [eventData, setEventData] = useState(undefined);
  const [allData, setAllData] = useState(undefined);
  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => {
        setAllData(sortEvents(data));
        setIsLoaded(true);
        console.log(allData);
      });
  }, []);

  return (
    <>
      {!isLoaded ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <div className="events px-14">
            {allData !== undefined && (
              <div>
                <EventBlock
                  events={allData.ongoingEvents}
                  desc="Ongoing"
                  setIsEventOpen={setIsEventOpen}
                  setEventData={setEventData}
                />
                <EventBlock
                  events={allData.upcomingEvents}
                  desc="Upcoming"
                  setIsEventOpen={setIsEventOpen}
                  setEventData={setEventData}
                />
                <EventBlock
                  events={allData.pastEvents}
                  desc="Past"
                  setIsEventOpen={setIsEventOpen}
                  setEventData={setEventData}
                />
                {isEventOpen && (
                  <div className="fixed bottom-0 left-0 right-0 w-full overflow-hidden rounded-lg bg-lightTheme-black-10 dark:bg-darkTheme-white-10 top-36 bg-opacity-10 dark:bg-opacity-60 backdrop-blur-lg">
                    <div className="flex flex-col items-center justify-center py-5 md:p-10">
                      <button
                        className="primary"
                        onClick={() => {
                          setIsEventOpen(false);
                          setEventData(undefined);
                        }}
                      >
                        Click Me To Close
                      </button>
                      <div className="w-full lg:w-[90%]">
                        <Event
                          eventData={eventData}
                          setIsEventOpen={setIsEventOpen}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

const sortEvents = (events) => {
  events = events.sort((a, b) => {
    return new Date(b.eventDate) - new Date(a.eventDate);
  });
  const pastEvents = [];
  const upcomingEvents = [];
  const ongoingEvents = [];
  const today = new Date();
  events.forEach((event) => {
    const eventEndDate = new Date(event.endDate);
    const eventStartDate = new Date(event.startDate);
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
