import { format, subDays, parseISO } from "date-fns";
import { IParticipant } from "../types";

interface IRegistrationData {
  date: string;
  count: number;
}

const getFormattedDate = (date: Date) => format(date, "dd MMMM");

export const getRegistrationsPerDay = (
  participants: IParticipant[]
): IRegistrationData[] => {
  const registrations: { [date: string]: number } = {};

  const today = new Date();
  const startDate = subDays(today, 4);

  participants.forEach(({ dateOfRegistration }) => {
    const registrationDate = parseISO(dateOfRegistration);
    if (registrationDate >= startDate && registrationDate <= today) {
      const dateKey = format(registrationDate, "yyyy-MM-dd");
      if (!registrations[dateKey]) {
        registrations[dateKey] = 0;
      }
      registrations[dateKey]++;
    }
  });

  const result = Object.keys(registrations).map((date) => ({
    date: getFormattedDate(parseISO(date)),
    count: registrations[date],
  }));

  const allDates = Array.from({ length: 5 }, (_, i) => {
    const date = subDays(today, 4 - i);
    return getFormattedDate(date);
  });

  return allDates.map((date) => ({
    date,
    count: result.find((entry) => entry.date === date)?.count || 0,
  }));
};
