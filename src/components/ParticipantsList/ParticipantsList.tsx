import { ParticipantsItem } from "./ParticipantsItem";
import { IParticipant } from "../../types";

interface IParticipantsListProps {
  participants: IParticipant[];
}

export const ParticipantsList: React.FC<IParticipantsListProps> = ({
  participants,
}) => {
  return (
    <ul className="flex flex-wrap justify-center lg:justify-between gap-[35px]">
      {participants.map((participant, index) => (
        <ParticipantsItem key={index} {...{ participant, index }} />
      ))}
    </ul>
  );
};
