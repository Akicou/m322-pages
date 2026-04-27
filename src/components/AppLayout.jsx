import { Outlet } from "react-router-dom";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function AppLayout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
