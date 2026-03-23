import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="app-layout">
      {/* Sidebar fijo */}
      <Sidebar />
      {/* SPA */}
        <main >
            <Outlet />
        </main>

    </div>
  );
}

export default MainLayout;