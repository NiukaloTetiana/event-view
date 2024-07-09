import { useNavigate } from "react-router-dom";

import { Icon } from "../components";
import welcome from "../assets/images/welcome.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
      <div className="md:w-[400px] lg:w-[560px]">
        <h1 className="font-semibold text-[32px] md:text-[48px] lg:text-[80px] leading-[1.02] tracking-[-0.02em] mb-[30px]">
          Open the world of events with{" "}
          <span className="text-accentColor italic">Event View</span> - all
          events in one place!
        </h1>
        <p className="font-medium text-[14px] md:text-[16px] lg:text-[18px] leading-[1.33] tracking-[-0.02em] mb-[30px] md:mb-10">
          Discover and manage all your events in one place with us. Stay
          updated, plan efficiently, and never miss an event again.
        </p>
        <button
          type="button"
          onClick={() => navigate("/board")}
          className="flex gap-[18px] justify-center items-center border border-transparent bg-accentColor rounded-[30px] py-[18px] w-[230px] font-medium text-[20px] text-bgFirstLigtColor
      leading-[1.2] tracking-[-0.01em] primary-btn-hover group"
        >
          Get started
          <Icon
            id="arrow-up"
            className="fill-current group-hover:rotate-[53deg] transition duration-500"
            size="20"
          />
        </button>
      </div>

      <img
        // srcSet={`${welcome1x} 1x, ${welcome2x} 2x`}
        src={welcome}
        alt="People are resting at event"
        width={318}
        className="sm-max:w-[280px] rounded-[10px]"
      />
    </div>
  );
};

export default Home;
