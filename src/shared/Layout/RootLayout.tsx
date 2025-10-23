import { Outlet } from "react-router";
import Header from "./Header";

export default function RootLayout() {
  return (
    <div style={{
      display: "flex"
    }}>
      <div className="sidebar">
      <Header />
      </div>
      <div style={{
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

      }}>
      <Outlet />

      </div>
    </div>
  );
}
