import { Outlet } from "react-router-dom";

export default function ShopDashboardLayout() {
  const hostname = window.location.hostname;
  const shopname = hostname.split(".")[0];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Welcome to {shopname} Dashboard</h1>
      <Outlet />
    </div>
  );
}

