import { Outlet } from "react-router";
import Drawer from "./Drawer";

export default function MainLayout() {
  return (
    <>
      <Drawer>
        <Outlet />
      </Drawer>
    </>
  );
}
