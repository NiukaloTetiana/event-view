import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

import { EventsList, Loader, Sort } from "../components";
import { getEvents } from "../services";
import { IEvent } from "../types";

const EventsBoard = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isMoreItems, setIsMoreItems] = useState(true);

  const observerTarget = useRef(null);

  const limit = 6;

  useEffect(() => {
    const currentTarget = observerTarget.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (!isMoreItems) return;
          setIsLoading(true);
          getEvents(page)
            .then((res) => {
              setEvents([...events, ...res.events]);
              setPage((prev) => prev + 1);

              const isMoreEvents = page < Math.ceil(res.total / limit);
              setIsMoreItems(isMoreEvents);

              if (!isMoreEvents) {
                toast.info("You have reached the end of the events list.");
              }
            })
            .catch((e) => {
              toast.error(e.response.data.message);
            })
            .finally(() => {
              setIsLoading(false);
            });
        }
      },
      { threshold: 1 }
    );

    if (currentTarget) {
      observer.observe(currentTarget);
    }
    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [events, isMoreItems, page]);

  const handleSortChange = (option: string) => {
    console.log(option);
  };

  return (
    <div className="container pt-[64px] pb-[100px]">
      <Sort onSortChange={handleSortChange} />
      <EventsList events={events} />
      <div ref={observerTarget}></div>
      {isLoading && <Loader />}
    </div>
  );
};

export default EventsBoard;
