export interface IEvent {
  _id: string;
  title: string;
  description: string;
  event_date: string;
  organizer: string;
  logo_url: string;
}

export interface IEventWithoutId extends Omit<IEvent, "_id"> {}
