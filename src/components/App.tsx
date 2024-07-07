import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Layout } from "../components";

const Home = lazy(() => import("../pages/Home"));
const EventParticipants = lazy(() => import("../pages/EventParticipants"));
const EventRegistration = lazy(() => import("../pages/EventRegistration"));
const EventsBoard = lazy(() => import("../pages/EventsBoard"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="registration" element={<EventRegistration />} />
        <Route path="participants" element={<EventParticipants />} />
        <Route path="board" element={<EventsBoard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
