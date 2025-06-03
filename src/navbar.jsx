import {NavLink } from "react-router-dom";
import profile from "./assets/profile.jpg";
import { useAuth } from "./hooks/use-auth";
import { useUsers } from "./hooks/use-user";
import useApi from "./hooks/use-api";


export default function Navbar() {
  const { user } = useAuth();
  const { users } = useUsers();
  const hostname = window.location.hostname;
  const shopname = hostname.split(".")[0];
  const userInfo = users?.find((u) => u._id === user?.id);

  const handleLogout = async()=>{
     const result = await useApi.post('/auth/logout')
    //  console.log(result)
     window.location.href = "/auth/login";
  }


  return (
    <header className="lg:sticky top-0 w-full z-10 transition-all duration-500 bg-gray-800 text-white backdrop-blur-md bg-opacity-75  py-3">
      <div className="flex items-center justify-between px-4">
        
        <h1 className="text-3xl font-black uppercase">{userInfo?.username?.slice(0,1) || shopname?.slice(0,1)|| "logo"}</h1>
        
        <div className="relative group font-semibold capitalize text-lg">
          <div className="flex items-center justify-start gap-2 cursor-pointer group relative">
            <div className="w-12 h-12 rounded-full cursor-pointer">
              <img
                src={profile}
                alt="profile"
                className="w-full h-full rounded-full"
              />
            </div>
          </div>
          <div className="absolute group-hover:block mt-3 rounded  dropdown-content z-50 flex  flex-col bg-gray-100 px-4 text-gray-800 shadow-xl transition-all duration-500 ease-in-out max-h-0 overflow-hidden -left-36  group-hover:max-h-96 w-48">
            <div className="flex flex-col items-center gap-1 w-full [transition:0.5s] py-3 ">
              {userInfo?.shops?.length > 0 && userInfo?.shops?.map((shop, index) => (
                <NavLink
                  key={index}
                  to={`http://${shop}.localhost:5173`}
                  className={({ isActive }) =>
                    isActive
                      ? "text-rose-600 capitalize"
                      : "block border-b border-gray-100 py-1 text-base text-gray-500 hover:text-black md:mx-2 capitalize"
                  }
                >
                  {shop}
                </NavLink>
              ))}
              <button onClick={handleLogout} className="text-red-500/80 text-base hover:text-red-500 py-1 rounded cursor-pointer w-full">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
