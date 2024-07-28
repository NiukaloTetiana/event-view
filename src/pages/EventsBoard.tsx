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
  const [sortValue, setSortValue] = useState<string>("");
  const [sortLabel, setSortLabel] = useState<string>("None");

  const observerTarget = useRef(null);

  const limit = 6;

  useEffect(() => {
    const currentTarget = observerTarget.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (!isMoreItems) return;
          setIsLoading(true);
          getEvents({ page, limit }, sortValue)
            .then((res) => {
              setEvents((prevEvents) => [...prevEvents, ...res.events]);
              setPage((prev) => prev + 1);

              const isMoreEvents = page < Math.ceil(res.total / limit);
              setIsMoreItems(isMoreEvents);

              if (!isMoreEvents) {
                toast.info("You have reached the end of the events list.");
              }
            })
            .catch((e) => {
              toast.error(e.response?.data?.message || "An error occurred.");
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
  }, [isMoreItems, page, sortValue]);

  const handleSortChange = (label: string, value: string) => {
    setSortLabel(label);
    setSortValue(value);
    setPage(1);
    setEvents([]);
    setIsMoreItems(true);
  };

  return (
    <div className="container pt-[64px] pb-[100px]">
      {events.length ? (
        <>
          <Sort onSortChange={handleSortChange} sortLabel={sortLabel} />
          <EventsList events={events} />
        </>
      ) : null}

      <div ref={observerTarget}></div>
      {isLoading && <Loader />}
    </div>
  );
};

export default EventsBoard;
