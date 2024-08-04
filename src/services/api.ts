import axios from "axios";
import {
  IEvent,
  IEventsResponse,
  IParticipant,
  IParticipantNoId,
} from "../types";

interface IGetEventsParams {
  page: number;
  limit: number;
}

interface IUserCredentials {
  name?: string;
  email: string;
  password: string;
}

const BASE_URL = "https://event-view-backend.onrender.com/api";

export const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
export const setToken = (token: string) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  instance.defaults.headers.common.Authorization = "";
};

export const getEvents = async (
  params: IGetEventsParams,
  query: string = ""
): Promise<IEventsResponse> => {
  try {
    const { data } = await instance.get(`/events?${query}`, { params });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || "An error occurred");
    }
    throw new Error("An unknown error occurred");
  }
};

export const getEventById = async (eventId: string): Promise<IEvent> => {
  try {
    const { data } = await instance.get(`/events/${eventId}`);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message);
    }
    throw new Error("An unknown error occurred");
  }
};

export const addParticipant = async (
  participant: IParticipantNoId
): Promise<IParticipant> => {
  try {
    const { data } = await instance.post(`/participants`, participant);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message);
    }
    throw new Error("An unknown error occurred");
  }
};

export const getParticipants = async () => {
  try {
    const { data } = await instance.get(`/participants`);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message);
    }
  }
};

export const getParticipantsById = async (participantId: string) => {
  try {
    const { data } = await instance.get(`/participants/${participantId}`);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message);
    }
  }
};

export const getParticipantsByEventId = async (id: string) => {
  try {
    const { data } = await instance.get(`/participants?eventId=${id}`);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message);
    }
  }
};

export const registerUser = async (credentials: IUserCredentials) => {
  try {
    const { data } = await instance.post("/users/register", credentials);
    const { email, password } = credentials;

    await loginUser({ email, password });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message);
    }
  }
};

export const loginUser = async (credentials: IUserCredentials) => {
  try {
    const { data } = await instance.post("/users/login", credentials);
    setToken(data.accessToken);
    localStorage.setItem("refreshToken", JSON.stringify(data.refreshToken));
    localStorage.setItem("user", JSON.stringify(data.user));
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message);
    }
  }
};

export const refreshUser = async (token: string) => {
  try {
    const { data } = await instance.post("/users/refresh", {
      refreshToken: token,
    });
    setToken(data.accessToken);
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("refreshToken", JSON.stringify(data.refreshToken));
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        clearToken();
        localStorage.setItem("refreshToken", JSON.stringify(null));
        localStorage.setItem("user", JSON.stringify(null));
      }
      throw new Error(error.message);
    }
  }
};

export const getCurrentUser = async () => {
  try {
    const { data } = await instance.get("/users/current");
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message);
    }
  }
};

export const getEventsUser = async () => {
  try {
    const { data } = await instance.get("/users/events");
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message);
    }
  }
};

export const addEventUser = async (eventId: string) => {
  try {
    const { data } = await instance.post("/users/events", { eventId });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message);
    }
  }
};

export const logOutUser = async () => {
  try {
    const { data } = await instance.post("/users/logout");
    clearToken();
    localStorage.setItem("refreshToken", JSON.stringify(null));
    localStorage.setItem("user", JSON.stringify(null));
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message);
    }
  }
};
