import { useEffect, useState } from "react";

import { EventsList, Loader, Sort } from "../components";
import { getEvents } from "../services";
import { IEvent } from "../types";

const EventsBoard = () => {
  const [events, setEvents] = useState<IEvent[]>([]);

  useEffect(() => {
    getEvents().then((res) => {
      setEvents(res.events);
    });
  }, []);

  const handleSortChange = (option: string) => {
    console.log(option);
  };

  if (!events.length) return <Loader />;

  return (
    <div className="container pt-[64px] pb-[100px]">
      <Sort onSortChange={handleSortChange} />
      <EventsList events={events} />
    </div>
  );
};

export default EventsBoard;
