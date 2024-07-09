import { useNavigate } from "react-router-dom";

import { Icon } from "../components";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-8 lg:text-left">
      <h1 className="md:w-[400px] lg:w-[760px] font-semibold text-[32px] md:text-[48px] lg:text-[60px] leading-[1.02] tracking-[-0.02em] mb-[20px]">
        Open the world of events with{" "}
        <span className="text-accentColor italic">Event View</span> - all events
        in one place!
      </h1>
      <p className="md:w-[400px] lg:w-[510px] font-medium text-[14px] md:text-[16px] lg:text-[18px] leading-[1.33] tracking-[-0.02em] mb-[30px] md:mb-10">
        Discover and manage all your events in one place with us. Stay updated,
        plan efficiently, and never miss an event again.
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
  );
};

export default Home;
