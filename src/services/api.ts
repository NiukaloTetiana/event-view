import axios from "axios";
import { IEvent, IParticipant, IParticipantNoId } from "../types";

const BASE_URL = "http://localhost:3000/api";

const instance = axios.create({
  baseURL: BASE_URL,
});

export const getEvents = async (
  page: number = 1,
  query: string = ""
): Promise<IEvent[]> => {
  const { data } = await instance.get(`/events?${query}`, { params: { page } });

  return data;
};

export const getEventById = async (eventId: string): Promise<IEvent> => {
  const { data } = await instance.get(`/events/${eventId}`);

  return data;
};

export const addParticipant = async (
  participant: IParticipantNoId
): Promise<IParticipant> => {
  const { data } = await instance.post(`/participants`, participant);

  return data;
};

export const getParticipants = async () => {
  const { data } = await instance.get(`/participants`);

  return data;
};

export const getParticipantsById = async (participantId: string) => {
  const { data } = await instance.get(`/participants/${participantId}`);

  return data;
};

export const getParticipantsByEventId = async (id: string) => {
  const { data } = await instance.get(`/participants?eventId=${id}`);

  return data;
};
