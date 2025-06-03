import profile from "./assets/profile.jpg";
export default function Navbar() {
  return (
    <header className="lg:sticky top-0 w-full z-10 transition-all duration-500 bg-gray-800 text-white backdrop-blur-md bg-opacity-75  py-3">
      <div className="flex items-center justify-between px-4">
        <h1 className="text-3xl font-black">Logo</h1>
        <div className="relative group font-semibold capitalize text-lg">
             <div className="flex items-center justify-start gap-2 cursor-pointer group relative">
                    <div className="w-12 h-12 rounded-full cursor-pointer">
                     <img src={profile} alt="profile" className="w-full h-full rounded-full" />
                    </div>
              </div>
        <div className="absolute group-hover:block mt-3 rounded  dropdown-content z-50 flex  flex-col bg-gray-100  px-4 text-gray-800 shadow-xl transition-all duration-500 ease-in-out max-h-0 overflow-hidden -left-36  group-hover:max-h-96 w-48">
              <div className="flex flex-col items-center gap-1 w-full [transition:0.5s] ">
               <button className="">One</button>
               <button className="">Two</button>
              </div>
            </div>
            </div>
        {/* <div>
                    <div className="w-12 h-12 rounded-full cursor-pointer">
                     <img src={profile} alt="profile" className="w-full h-full rounded-full" />
                    </div>
                </div> */}
      </div>
    </header>
  );
}
