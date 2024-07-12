import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

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
        flex justify-center items-center fixed right-4 bottom-4 md:right-[30px] md:bottom-[30px] lg:right-[60px] lg:bottom-[40px] rounded-full w-12 h-12 shadow-md bg-accentColor hover:bg-hoverColor transition duration-300 ${
          !isVisible ? "scale-0" : "scale-1"
        }`}
    >
      <FaArrowUp className="fill-whiteColor" size="20" />
    </button>
  );
};
