import { NavLink } from "react-router-dom";

interface IEventItemProps {}

export const EventsItem: React.FC<IEventItemProps> = ({
  event: { title, description, event_date, organizer, logo_url },
  index,
}) => {
  return (
    <li className="flex flex-col justify-center items-center md:items-start md:flex-row gap-[50px] md:gap-[24px] w-full bg-bgFirstLigtColor rounded-[24px] p-[24px] height-[318px] shadow-md transition-transform transform hover:scale-105 focus:scale-105">
      <div className="flex shrink-0 h-[96px] w-[96px] md:h-[120px] md:w-[120px] p-[12px] border-2 border-secondBorderColor rounded-[30px]">
        <img
          src={logo_url}
          alt={organizer}
          className="rounded-[15px] md:w-[96px] md:h-[96px]"
          width="72"
          height="72"
        />
      </div>
      <div>
        <h3 className="md:static font-medium text-[18px] md:text-[20px] lg:text-[24px] leading-[1] text-darkColor md:mb-[24px]">
          {title}
        </h3>

        <ul className="flex gap-[8px] mb-[24px]">
          <li className="item">{event_date}</li>
          <li className="item">
            Organizer: <span className="text-secondTextColor">{organizer}</span>
          </li>
        </ul>
        <p className="font-normal text-[16px] leading-[1.25] text-secondTextColor mb-[14px]">
          {description}
        </p>

        <div className="flex justify-between">
          <NavLink
            className="description link active"
            to={`/registration/${index}`}
          >
            Register
          </NavLink>
          <NavLink
            className="description link active"
            to={`/participants/${index}`}
          >
            View
          </NavLink>
        </div>
      </div>
    </li>
  );
};
