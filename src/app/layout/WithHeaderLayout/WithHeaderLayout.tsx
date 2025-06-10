import { Header } from "@components/Header/Header";
import { Outlet } from "react-router";

export function WithHeaderLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
