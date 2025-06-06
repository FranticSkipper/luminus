import { Header } from "@components/Header/Header";
import { Outlet } from "react-router";

export function BaseLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
