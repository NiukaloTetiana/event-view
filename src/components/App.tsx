import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Layout } from "../components";
import { PrivateRoute } from "../routes";

const Home = lazy(() => import("../pages/Home"));
const EventParticipants = lazy(() => import("../pages/EventParticipants"));
const EventRegistration = lazy(() => import("../pages/EventRegistration"));
const EventsBoard = lazy(() => import("../pages/EventsBoard"));
const EventsSchedule = lazy(() => import("../pages/EventsSchedule"));

export const App = () => {
  const user = true;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="registration/:id" element={<EventRegistration />} />
        <Route path="participants/:id" element={<EventParticipants />} />
        <Route path="board" element={<EventsBoard />} />
        <Route
          path="schedule"
          element={
            <PrivateRoute user={user}>
              <EventsSchedule />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
