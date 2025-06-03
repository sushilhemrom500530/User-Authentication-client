import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./routes";
import ShopDashboardLayout from "./layouts/shop-dashboard";

const getSubdomain = () => {
  const hostname = window.location.hostname;
  const parts = hostname.split(".");
  if (parts.length === 2 && parts[1] === "localhost") {
    return parts[0];
  } else if (parts.length > 2) {
    return parts[0]; // in case of prod with www.shop.com
  }
  return null;
};

const subdomain = getSubdomain();
const isSubdomain = subdomain && subdomain !== "localhost" && subdomain !== "www";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {isSubdomain ? <ShopDashboardLayout /> : <RouterProvider router={Router} />}
  </StrictMode>
);
