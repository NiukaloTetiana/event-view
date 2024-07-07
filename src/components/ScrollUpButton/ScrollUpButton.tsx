import { useEffect, useState } from "react";

import { Icon } from "../../components";

export const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollUp}
      className={`
        flex justify-center items-center fixed right-4 bottom-4 md:right-[30px] md:bottom-[30px] lg:right-[60px] lg:bottom-[40px] rounded-full w-12 h-12 shadow-md bg-yellow-300 hover:bg-amber-200 transition duration-300 ${
          !isVisible ? "scale-0" : "scale-1"
        }`}
    >
      <Icon id="arrow" className="fill-white" size="20" />
    </button>
  );
};
