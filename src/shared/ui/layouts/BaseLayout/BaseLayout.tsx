import { BaseContainer } from "@shared/ui/containers/BaseContainer/index";
import { Outlet } from "react-router";

export function BaseLayout() {
  return (
    <BaseContainer>
      <Outlet />
    </BaseContainer>
  );
}
