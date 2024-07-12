import { Link } from "react-router-dom";
import { RiArrowRightDoubleLine } from "react-icons/ri";

const EventRegistration = () => {
  return (
    <div className="container pt-[64px] pb-[100px]">
      <div className="flex gap-1 mb-[32px]">
        <Link to="/board" className="flex gap-1 items-center link-back">
          Events board
          <RiArrowRightDoubleLine size="18px" className="fill-current" />
        </Link>
        <Link to={"/participants/id"} className="link-back">
          Participants
        </Link>
      </div>
    </div>
  );
};

export default EventRegistration;
