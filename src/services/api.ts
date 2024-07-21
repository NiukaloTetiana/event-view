import axios from "axios";
import { IParticipant, IParticipantNoId } from "../types";

const BASE_URL = "http://localhost:3000/api";

const instance = axios.create({
  baseURL: BASE_URL,
});

export const getEvents = async (page: number = 1, query: string = "") => {
  const { data } = await instance.get(`/events?${query}`, { params: { page } });

  return data;
};

export const getEventById = async (eventId: string) => {
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
