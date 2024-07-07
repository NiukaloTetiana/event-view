import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header, Loader, ScrollUpButton } from "../../components";

export const Layout = () => {
  return (
    <>
      <Header />

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ScrollUpButton />
      </main>
    </>
  );
};
