import { Header } from "@widgets/Header/Header";
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
