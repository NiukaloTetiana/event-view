import { IParticipant } from "../types";

export const getFilterParticipants = (
  filter: string,
  participants: IParticipant[]
): IParticipant[] => {
  if (!participants) return [];

  return participants.filter(
    (item) =>
      item.name.toLowerCase().includes(filter.toLowerCase()) ||
      item.email.toLowerCase().includes(filter.toLowerCase())
  );
};
