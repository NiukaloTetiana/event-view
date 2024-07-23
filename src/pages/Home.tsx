import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import welcome from "../assets/images/welcome.png";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add(
      "bg-gradient-to-r",
      "from-bgFirstLigtColor",
      "to-bgSecondLightColor"
    );
    return () => {
      document.body.classList.remove(
        "bg-gradient-to-r",
        "from-bgFirstLigtColor",
        "to-bgSecondLightColor"
      );
    };
  }, []);

  return (
    <div className="container py-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
      <div className="md:w-[320px] lg:w-[520px]">
        <h1 className="sm-max:w-[250px] w-[310px] md:w-full font-semibold text-textColor sm-max:text-[34px] text-[40px] md:text-[44px] lg:text-[74px] leading-[1.02] tracking-[-0.02em] mb-[20px] lg:mb-[30px]">
          Open the world of events with{" "}
          <span className="text-accentColor italic">Event View</span> - all
          events in one place!
        </h1>
        <p className="font-medium text-textColor text-[14px] md:text-[16px] lg:text-[18px] leading-[1.33] tracking-[-0.02em] mb-[30px] lg:mb-10">
          Discover and manage all your events in one place with us. Stay
          updated, plan efficiently, and never miss an event again.
        </p>
        <button
          type="button"
          onClick={() => navigate("/board")}
          className="flex gap-[10px] justify-center items-center border border-transparent bg-accentColor rounded-[30px] py-[18px] h-[59px] w-[200px] lg:w-[230px] font-medium text-[18px] lg:text-[20px] text-bgFirstColor
      leading-[1.2] tracking-[-0.01em] primary-btn-hover group"
        >
          Get started
          <HiOutlineArrowNarrowRight
            className="fill-current group-hover:translate-x-[7px] transition-transform duration-500"
            size="22"
          />
        </button>
      </div>

      <img
        // srcSet={`${welcome1x} 1x, ${welcome2x} 2x`}
        src={welcome}
        alt="People are resting at event"
        width={318}
        className="w-full md:w-[340px] lg:w-[480px] rounded-[10px]"
      />
    </div>
  );
};

export default Home;
