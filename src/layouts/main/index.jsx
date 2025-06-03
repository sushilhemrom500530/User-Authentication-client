import Navbar from "../../navbar";
import Home from "../../view/home";
import { useEffect, useState } from "react";

export default function MainLayout() {
const [currentShopDomain,setCurrentShopDomain] = useState('')

  useEffect(() => {
      const subdomain = getSubdomain();
      setCurrentShopDomain(subdomain)

  }, []);
  
      console.log('Subdomain:', currentShopDomain);

  const getSubdomain = () => {
    const hostname = window.location.hostname; // e.g., sfsffsdfs.localhost
    const parts = hostname.split('.');

    // Handle localhost with subdomain
    if (parts.length === 2 && parts[1] === 'localhost') {
      return parts[0]; // subdomain
    }

    // Handle production-like domains (e.g., sub.example.com)
    if (parts.length > 2) {
      return parts[0]; // first part = subdomain
    }

    return null; // no subdomain
  };

  const domain = getSubdomain();
  console.log("get Subdomain:".domain)

  return (
    <div>
          <Navbar />
          <Home />
    </div>
  )
}
