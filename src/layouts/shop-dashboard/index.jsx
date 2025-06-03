import { Outlet } from "react-router-dom";
import Navbar from "../../navbar";
import { useAuth } from "../../hooks/use-auth";

export default function ShopDashboardLayout() {
  const hostname = window.location.hostname;
  const shopname = hostname.split(".")[0];
  const { user } = useAuth();
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-72px)] bg-black flex flex-col items-center justify-center">
      <h1 className="text-2xl capitalize font-bold text-white">Welcome to {shopname} Dashboard</h1>
      </div>
      <Outlet />
    </div>
  );
}

