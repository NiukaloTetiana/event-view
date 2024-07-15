import { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowRightDoubleLine } from "react-icons/ri";

import participants from "../assets/participants.json";
import { ParticipantsList, Filter } from "../components";

const EventParticipants = () => {
  const [filter, setFilter] = useState("");

  const handleChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  return (
    <div className="container pt-[64px] pb-[100px]">
      <div className="flex items-center mb-[32px]">
        <Link to="/board" className="link-back">
          Events board
        </Link>

        <RiArrowRightDoubleLine size={20} className="fill-current" />

        <Link to={"/registration/id"} className="link-back">
          Register
        </Link>
      </div>

      <h2 className="title">Event participants</h2>
      <Filter onChange={handleChangeFilter} />
      <ParticipantsList participants={participants} />
    </div>
  );
};

export default EventParticipants;
