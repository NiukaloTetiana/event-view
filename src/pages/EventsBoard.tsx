import { EventsList } from "../components";

import events from "../assets/events.json";
const EventsBoard = () => {
  return (
    <div className="container pt-[64px] pb-[100px]">
      <EventsList events={events} />
    </div>
  );
};

export default EventsBoard;
