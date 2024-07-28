import { useState, useEffect, useRef, RefObject } from "react";
import { IoIosArrowDown } from "react-icons/io";

import { sortOptions } from "../../constants";

interface ISortProps {
  onSortChange: (label: string, value: string) => void;
  sortLabel: string;
}

export const Sort = ({ onSortChange, sortLabel }: ISortProps) => {
  const [isListVisible, setIsListVisible] = useState<boolean>(false);
  const sortRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsListVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleListClick = () => {
    setIsListVisible(!isListVisible);
  };

  const handleSortClick = (label: string, value: string) => {
    onSortChange(label, value);
    setIsListVisible(false);
  };

  return (
    <div className="mb-[32px] relative">
      <p className="font-medium text-[14px] leading-[1.3] text-secondTextColor mb-[8px]">
        Sort By:
      </p>
      <div
        ref={sortRef}
        onClick={handleListClick}
        className="flex items-center justify-between bg-accentColor rounded-[14px] px-[18px] py-[16px] w-[180px] md:w-[226px] font-medium text-[16px] leading-[1.1] text-bgFirstColor cursor-pointer hover:bg-hoverColor focus:bg-hoverColor transition duration-300 group"
      >
        {sortLabel}
        <IoIosArrowDown
          className={`stroke-none fill-bgFirstColor transition duration-300 ${
            isListVisible ? "rotate-180" : ""
          }`}
          size="20"
        />
      </div>
      {isListVisible && (
        <ul className="absolute top-[88px] left-0 bg-whiteColor rounded-[14px] px-[18px] py-[16px] w-[180px] md:w-[226px] font-normal text-[16px] leading-[1.1] text-secondTextColor space-y-[8px] z-[2] shadow-lg">
          {sortOptions.map(({ label, value }) => (
            <li
              key={value}
              onClick={() => handleSortClick(label, value)}
              className={`cursor-pointer hover:text-textColor transition duration-300 ${
                label === sortLabel ? "text-textColor" : ""
              }`}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
