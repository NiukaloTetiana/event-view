import { ParticipantsItem } from "./ParticipantsItem";
import { IParticipant } from "../../types";

interface IParticipantsListProps {
  participants: IParticipant[];
}

export const ParticipantsList: React.FC<IParticipantsListProps> = ({
  participants,
}) => {
  return (
    <ul className="flex flex-wrap justify-center gap-[35px] lg:gap-[46px]">
      {participants.map((participant) => (
        <ParticipantsItem key={participant._id} {...{ participant }} />
      ))}
    </ul>
  );
};
