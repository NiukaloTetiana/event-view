import { Link, useParams } from "react-router-dom";
import { RiArrowRightDoubleLine } from "react-icons/ri";

import { RegisterForm } from "../components";

const EventRegistration = () => {
  const { id } = useParams();

  return (
    <div className="container pt-[64px] pb-[100px]">
      <div className="flex items-center mb-[32px]">
        <Link to="/board" className="link-back">
          Events board
        </Link>

        <RiArrowRightDoubleLine size={20} className="fill-textColor" />

        <Link to={`/participants/${id}`} className="link-back">
          Participants
        </Link>
      </div>

      <RegisterForm />
    </div>
  );
};

export default EventRegistration;
