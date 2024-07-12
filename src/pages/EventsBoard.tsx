import { EventsList, Sort } from "../components";

import events from "../assets/events.json";

const EventsBoard = () => {
  const handleSortChange = (option: string) => {
    console.log(option);
  };

  return (
    <div className="container pt-[64px] pb-[100px]">
      <Sort onSortChange={handleSortChange} />
      <EventsList events={events} />
    </div>
  );
};

export default EventsBoard;
