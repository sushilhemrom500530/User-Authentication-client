import bg_image from "../../../assets/home banner.jpg";


export default function Banner() {
  return (
    <div
      className="relative w-full h-[calc(100vh-72px)] overflow-hidden"
      style={{
        backgroundImage: `url(${bg_image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 w-full h-full bg-black/60 z-0" />
      <div className="relative -top-6 flex justify-center items-center flex-col gap-4 text-white w-full h-full overflow-auto px-4">
        <h1 className="text-3xl lg:text-6xl font-semibold ">Congratulations!</h1>
        <p>For Joining Our Organization</p>
      </div>
    </div>
  )
}
