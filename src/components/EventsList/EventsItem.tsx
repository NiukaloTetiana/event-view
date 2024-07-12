import { Link } from "react-router-dom";
import { format } from "date-fns";

import { IEvent } from "../../types";

interface IEventItemProps {
  event: IEvent;
  index: number;
}

export const EventsItem: React.FC<IEventItemProps> = ({
  event: { title, description, event_date, organizer, logo_url },
  index,
}) => {
  return (
    <li className="w-[320px] lg:w-[574px] bg-bgFirstLigtColor rounded-[24px] p-[34px] height-[318px] shadow-md transition-transform transform hover:scale-105 focus:scale-105">
      <div className="flex flex-col-reverse items-center lg:items-start lg:flex-row lg:justify-between gap-[30px] lg:gap-[24px]">
        <div>
          <h3 className="font-medium text-center lg:text-start text-[18px] md:text-[20px] lg:text-[24px] leading-[1] text-darkColor mb-[24px]">
            {title}
          </h3>

          <div className="flex flex-col gap-[8px] mb-[24px]">
            <p className="item">{format(event_date, "PP")}</p>
            <p className="item">
              <span className="text-secondTextColor">Organizer: </span>
              {organizer}
            </p>
          </div>
        </div>
        <div className="flex shrink-0 h-[136px] w-[169px] p-[12px] border-2 border-secondBorderColor rounded-[30px]">
          <img
            src={logo_url}
            alt={organizer}
            className="rounded-[15px]"
            width="140"
            height="112"
          />
        </div>
      </div>

      <div>
        <p className="w-full font-normal text-[16px] leading-[1.25] text-secondTextColor mb-[14px]">
          {description}
        </p>

        <div className="flex justify-between">
          <Link className="description link" to={`/registration/${index}`}>
            Register
          </Link>
          <Link className="description link" to={`/participants/${index}`}>
            View
          </Link>
        </div>
      </div>
    </li>
  );
};
