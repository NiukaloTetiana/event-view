import { Link } from "react-router-dom";
import { RiArrowRightDoubleLine } from "react-icons/ri";

import participants from "../assets/participants.json";
import { ParticipantsList } from "../components";

const EventParticipants = () => {
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

      <ParticipantsList participants={participants} />
    </div>
  );
};

export default EventParticipants;
