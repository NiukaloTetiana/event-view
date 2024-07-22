import { EventsItem } from "./EventsItem";
import { IEvent } from "../../types";

interface IEventsListProps {
  events: IEvent[];
}

export const EventsList: React.FC<IEventsListProps> = ({ events }) => {
  return (
    <ul className="flex flex-wrap justify-center gap-[35px]">
      {events.map((event, index) => (
        <EventsItem key={index} {...{ event }} />
      ))}
    </ul>
  );
};
