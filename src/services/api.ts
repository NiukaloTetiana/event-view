import axios from "axios";
import {
  IEvent,
  IEventsResponse,
  IParticipant,
  IParticipantNoId,
} from "../types";

const BASE_URL = "https://event-view-backend.onrender.com/api";

const instance = axios.create({
  baseURL: BASE_URL,
});

interface IGetEventsParams {
  page: number;
  limit: number;
}

export const getEvents = async (
  params: IGetEventsParams,
  query: string = ""
): Promise<IEventsResponse> => {
  const { data } = await instance.get(`/events?${query}`, { params });

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
