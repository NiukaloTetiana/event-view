import { format } from "date-fns";

import { IParticipant } from "../../types";

interface IParticipantItemProps {
  participant: IParticipant;
}

export const ParticipantsItem: React.FC<IParticipantItemProps> = ({
  participant: { name, email, dateOfRegistration },
}) => {
  return (
    <li className="flex flex-col sm-max:w-full w-[300px] lg:w-[360px] bg-bgFirstLigtColor rounded-[24px] p-[34px] sm-max:px-[20px] md:px-[30px] shadow-md transition-transform transform hover:scale-105 focus:scale-105">
      <p className="font-medium text-center lg:text-start text-[18px] md:text-[20px] lg:text-[24px] leading-[1] text-darkColor mb-[24px]">
        {name}
      </p>
      <p className="w-full font-normal text-center lg:text-start text-[16px] leading-[1.25] text-secondTextColor mb-[14px]">
        {email}
      </p>
      <p className="item font-normal text-[14px] md:text-[16px] leading-[1.25]">
        <span className="text-secondTextColor">Date of registration: </span>
        {format(dateOfRegistration, "PP")}
      </p>
    </li>
  );
};
