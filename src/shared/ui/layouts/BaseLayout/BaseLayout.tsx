import { Header } from "@components/Header/Header";
import { BaseContainer } from "@shared/ui/containers/BaseContainer/index";
import { Outlet } from "react-router";

export function BaseLayout() {
  return (
    <>
      <Header />
      <main>
        <BaseContainer>
          <Outlet />
        </BaseContainer>
      </main>
    </>
  );
}
