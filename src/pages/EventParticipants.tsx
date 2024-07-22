import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RiArrowRightDoubleLine } from "react-icons/ri";

import { ParticipantsList, Filter, Loader } from "../components";
import { IParticipant } from "../types";
import { getEventById, getParticipantsByEventId } from "../services";

const EventParticipants = () => {
  const { id } = useParams();
  const [participants, setParticipants] = useState<IParticipant[] | null>(null);
  const [filter, setFilter] = useState("");
  console.log(filter);

  useEffect(() => {
    if (!id) return;

    getEventById(id)
      .then(() => {
        getParticipantsByEventId(id)
          .then(setParticipants)
          .catch((e) => {
            e.response.data.message;
          });
      })
      .catch((e) => {
        e.response.data.message;
      });
  }, [id]);

  const handleChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  if (!participants) return <Loader />;

  return (
    <div className="container pt-[64px] pb-[100px]">
      <div className="flex items-center mb-[32px]">
        <Link to="/board" className="link-back">
          Events board
        </Link>

        <RiArrowRightDoubleLine size={20} className="fill-current" />

        <Link to={`/registration/${id}`} className="link-back">
          Register
        </Link>
      </div>

      <h2 className="title">Event participants</h2>
      <Filter onChange={handleChangeFilter} />
      <ParticipantsList participants={participants} />

      {participants.length ? (
        <h2 className="title text-center">No results for "{filter}".</h2>
      ) : null}
    </div>
  );
};

export default EventParticipants;
