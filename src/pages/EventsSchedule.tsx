import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { getEventsUser } from "../services";
import { useLocalStorage } from "../hooks";
import { EventsList, Loader } from "../components";

const EventsSchedule = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const [user] = useLocalStorage("user", null);

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      try {
        if (user) {
          const data = await getEventsUser();
          setEvents(data.events);
        }
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error("An unexpected error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, [user]);

  return (
    <div className="container pt-[64px] pb-[100px]">
      {isLoading ? (
        <Loader />
      ) : (
        <EventsList events={events} hideRegister={true} />
      )}
    </div>
  );
};

export default EventsSchedule;
