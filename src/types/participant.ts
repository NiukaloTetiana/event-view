export type Source = "Social media" | "Friends" | "Found myself";

export interface IParticipant {
  _id: string;
  name: string;
  email: string;
  dateOfBirth: Date;
  dateOfRegistration: Date;
  eventAdvertisementSource: Source;
  eventId: string;
}

export interface IParticipantNoId {
  name: string;
  email: string;
  dateOfBirth: Date;
  dateOfRegistration: Date;
  eventAdvertisementSource: Source;
  eventId: string;
}
