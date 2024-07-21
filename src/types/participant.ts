export interface IParticipant {
  _id: string;
  name: string;
  email: string;
  dateOfBirth: Date;
  dateOfRegistration: Date;
  eventAdvertisementSource: "Social media" | "Friends" | "Found myself";
  eventId: string;
}

export interface IParticipantNoId {
  name: string;
  email: string;
  dateOfBirth: string;
  dateOfRegistration: string;
  eventAdvertisementSource: "Social media" | "Friends" | "Found myself";
  eventId: string;
}
