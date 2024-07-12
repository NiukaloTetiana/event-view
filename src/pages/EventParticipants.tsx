import { Link } from "react-router-dom";
import { RiArrowRightDoubleLine } from "react-icons/ri";

const EventParticipants = () => {
  return (
    <div className="container pt-[64px] pb-[100px]">
      <div className="flex gap-1 mb-[32px]">
        <Link to="/board" className="flex gap-1 items-center link-back">
          Events board
          <RiArrowRightDoubleLine size="18px" className="fill-current" />
        </Link>
        <Link to={"/registration/id"} className="link-back">
          Register
        </Link>
      </div>
    </div>
  );
};

export default EventParticipants;
