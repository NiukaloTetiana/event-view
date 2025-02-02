import { Link } from "react-router-dom";
import { format } from "date-fns";

import { IEvent } from "../../types";

interface IEventItemProps {
  event: IEvent;
  hideRegister?: boolean;
}

export const EventsItem: React.FC<IEventItemProps> = ({
  event: { _id, title, description, event_date, organizer, logo_url },
  hideRegister,
}) => {
  return (
    <li className="flex flex-col w-[320px] lg:w-[574px] bg-bgFirstColor rounded-[24px] p-[34px] height-[318px] shadow-md transition-transform transform hover:scale-105 focus:scale-105">
      <div className="flex flex-col-reverse items-center lg:items-start lg:flex-row lg:justify-between gap-[30px] lg:gap-[24px] mb-auto">
        <div>
          <h3 className="font-medium text-center lg:text-start text-[18px] md:text-[20px] lg:text-[24px] leading-[1] text-textColor mb-[24px]">
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
            className="rounded-[15px] object-cover w-full h-full"
            width="140"
            height="112"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between grow">
        <p className="w-full font-normal text-[16px] leading-[1.25] text-secondTextColor mb-[14px]">
          {description}
        </p>

        <div className="flex justify-between mt-auto">
          {!hideRegister && (
            <Link className="description link" to={`/registration/${_id}`}>
              Register
            </Link>
          )}
          <Link className="description link" to={`/participants/${_id}`}>
            View
          </Link>
        </div>
      </div>
    </li>
  );
};
