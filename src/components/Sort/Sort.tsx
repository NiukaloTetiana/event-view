import { useState, useEffect, useRef, RefObject } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface ISortProps {
  onSortChange: (sortOption: string) => void;
}

export const Sort = ({ onSortChange }: ISortProps) => {
  const [isListVisible, setIsListVisible] = useState<boolean>(false);
  const [selectedSort, setSelectedSort] = useState("None");
  const sortRef: RefObject<HTMLDivElement> = useRef(null);

  const handleListClick = () => {
    setIsListVisible(!isListVisible);
  };

  const handleSortClick = (sortOption: string) => {
    setSelectedSort(sortOption);
    setIsListVisible(false);
    onSortChange(sortOption);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
      setIsListVisible(false);
    }
  };

  return (
    <div className="mb-[32px] relative">
      <p className="font-medium text-[14px] leading-[1.3] text-secondTextColor mb-[8px]">
        Sort By:
      </p>
      <div
        ref={sortRef}
        onClick={handleListClick}
        className="flex items-center justify-between bg-accentColor rounded-[14px] px-[18px] py-[16px] w-[180px] md:w-[226px] font-medium text-[16px] leading-[1.1] text-lightColor cursor-pointer hover:bg-hoverColor focus:bg-hoverColor transition duration-300 group"
      >
        {selectedSort}
        <IoIosArrowDown
          className={`stroke-none fill-bgFirstLigtColor transition duration-300 ${
            isListVisible ? "rotate-180" : ""
          }`}
          size="20"
        />
      </div>
      {isListVisible && (
        <ul className="absolute top-[88px] left-0 bg-whiteColor rounded-[14px] px-[18px] py-[16px] w-[180px] md:w-[226px] font-normal text-[16px] leading-[1.1] text-secondTextColor space-y-[8px] z-[2] shadow-list-shadow">
          {[
            "None",
            "Newest",
            "Oldest",
            "Title A-Z",
            "Title Z-A",
            "Organizer A-Z",
            "Organizer Z-A",
          ].map((sortOption, index) => (
            <li
              key={index}
              onClick={() => handleSortClick(sortOption)}
              className={`cursor-pointer hover:text-textColor transition duration-300 ${
                sortOption === selectedSort ? "text-textColor" : ""
              }`}
            >
              {sortOption}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
