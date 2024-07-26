import { lazy, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Layout, Loader } from "../components";
import { PrivateRoute } from "../routes";
import { useLocalStorage } from "../hooks";
import { refreshUser } from "../services/api";

const Home = lazy(() => import("../pages/Home"));
const EventParticipants = lazy(() => import("../pages/EventParticipants"));
const EventRegistration = lazy(() => import("../pages/EventRegistration"));
const EventsBoard = lazy(() => import("../pages/EventsBoard"));
const EventsSchedule = lazy(() => import("../pages/EventsSchedule"));

export const App = () => {
  const [refreshToken] = useLocalStorage("refreshToken", null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    setIsRefreshing(true);

    if (refreshToken) {
      refreshUser(refreshToken);
    }

    setIsRefreshing(false);
  }, [refreshToken]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="registration/:id" element={<EventRegistration />} />
        <Route path="participants/:id" element={<EventParticipants />} />
        <Route path="board" element={<EventsBoard />} />
        <Route
          path="schedule"
          element={
            <PrivateRoute>
              <EventsSchedule />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
