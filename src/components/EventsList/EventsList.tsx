import { EventsItem } from "./EventsItem";
import events from "../../assets/events.json";

interface IEventsListProps {}

export const EventsList: React.FC<IEventsListProps> = () => {
  return (
    <ul className="flex flex-wrap gap-[32px] md:justify-center md:w-[704px] lg:w-full mb-12 lg:mb-16">
      {events.map((event, index) => (
        <EventsItem key={index} {...{ event, index }} />
      ))}
    </ul>
  );
};
