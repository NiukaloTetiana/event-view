import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { toast } from "react-toastify";

import { ParticipantsList, Filter, Loader } from "../components";
import { IEvent, IParticipant } from "../types";
import { getEventById, getParticipantsByEventId } from "../services";
import { getFilterParticipants } from "../helpers";

const EventParticipants = () => {
  const { id } = useParams();
  const [participants, setParticipants] = useState<IParticipant[]>([]);
  const [event, setEvent] = useState<IEvent | null>(null);
  const [filter, setFilter] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) return;

    getEventById(id)
      .then((res) => {
        setEvent(res);
        getParticipantsByEventId(id)
          .then((data) => {
            setParticipants(data);
            setLoading(false);
          })
          .catch((e) => {
            toast.error(e.response.data.message);
            setLoading(false);
          });
      })
      .catch((e) => {
        toast.error(e.response.data.message);
        setLoading(false);
      });
  }, [id]);

  const handleChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const filteredParticipants = getFilterParticipants(filter, participants);

  if (loading) return <Loader />;

  return (
    <div className="container pt-[64px] pb-[100px]">
      <div className="flex items-center mb-[32px]">
        <Link to="/board" className="link-back">
          Events board
        </Link>

        <RiArrowRightDoubleLine size={20} className="fill-textColor" />

        <Link to={`/registration/${id}`} className="link-back">
          Register
        </Link>
      </div>

      <h2 className="title mb-[32px]">
        <span className="text-accentColor">"{event?.title}"</span> event
        participants
      </h2>
      {participants.length ? <Filter onChange={handleChangeFilter} /> : null}
      <ParticipantsList participants={filteredParticipants} />

      {!filteredParticipants.length && filter ? (
        <h2 className="title text-center">
          No results for <span className="text-accentColor">"{filter}"</span>
        </h2>
      ) : participants.length === 0 ? (
        <h2 className="title text-center">
          No participants registered for this event yet.
        </h2>
      ) : null}
    </div>
  );
};

export default EventParticipants;
