import { EventsItem } from "./EventsItem";
import { IEvent } from "../../types";

interface IEventsListProps {
  events: IEvent[];
  hideRegister?: boolean;
}

export const EventsList: React.FC<IEventsListProps> = ({
  events,
  hideRegister,
}) => {
  return (
    <ul className="flex flex-wrap justify-center gap-[35px]">
      {events.map((event, index) => (
        <EventsItem key={index} event={event} hideRegister={hideRegister} />
      ))}
    </ul>
  );
};
