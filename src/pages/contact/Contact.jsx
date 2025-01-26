import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { memo } from "react";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";

const Contact = () => {
  const locations = [
    { position: [41.2995, 69.2401], price: "150K" }, // Tashkent markazi
    { position: [41.3155, 69.2551], price: "200K" },
    { position: [41.3125, 69.2151], price: "180K" },
    { position: [41.3055, 69.2301], price: "175K" },
  ];
  return (
    <div className="container px-4 md:px-8 py-[91px]">
      <h2 className="font-semibold text-[36px] leading-7">Bog’lanish</h2>
      <p className="font-light text-[16px] leading-6 pt-7">
        Bizning ijtimoy sahiflarimiz
      </p>
      <div className="grid md:grid-cols-2 md:gap-[72px]">
        <div className="pt-[73px] flex flex-col md:gap-[75px] gap-[50px]">
          <div className="px-[34px] py-[25px] flex shadow rounded-[20px] gap-5 items-center">
            <img
              src="/Vector46.svg"
              alt=""
              className="tel rounded-2xl p-[21px]  h-[100px]"
            />
            <div>
              <p className="font-bold text-lg leading-6 pb-[14px]">
                Telefon raqam va email
              </p>
              <p className="font-medium text-[15px] leading-5 pb-[14px]">
                +998 (00)-123-45-67
              </p>
              <p className="font-medium text-[15px] leading-5 pb-[14px]">
                +998 (00)-123-45-77
              </p>
              <p className="font-medium text-[15px] leading-5 pb-[14px]">
                EHM@info.uz
              </p>
            </div>
          </div>
          <div className="px-[34px] py-[25px] flex shadow rounded-[20px] gap-5 items-center">
            <img
              src="/Group.svg"
              alt=""
              className="insta rounded-2xl p-[21px]  h-[100px]"
            />
            <div>
              <p className="font-bold text-lg leading-6 pb-[14px]">Instagram</p>
              <p className="font-medium text-[15px] leading-5 pb-[14px]">
                @ehmschool.uz
              </p>
              <button className="bg-[#F0F0F2DE] px-5 py-3 font-bold text-sm leading-6 rounded-lg">
                Obuna bo`lish
              </button>
            </div>
          </div>
          <div className="px-[34px] py-[25px] flex shadow rounded-[20px] gap-5 items-center">
            <img
              src="/Vector.svg"
              alt=""
              className="telegram rounded-2xl p-[21px]  h-[100px]"
            />
            <div>
              <p className="font-bold text-lg leading-6 pb-[14px]">Telegram</p>
              <p className="font-medium text-[15px] leading-5 pb-[14px]">
                @ehminfo
              </p>
              <button className="bg-[#F0F0F2DE] px-5 py-3 font-bold text-sm leading-6 rounded-lg">
                Obuna bo`lish
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center h-screen self-center">
          <div className="w-full max-w-4xl h-[500px] rounded-lg shadow-lg overflow-hidden">
            <MapContainer
              center={[41.2995, 69.2401]} // Tashkent koordinatalari
              zoom={12}
              className="h-full w-full"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {/* Markerlar */}
              {locations.map((loc, index) => (
                <Marker
                  key={index}
                  position={loc.position}
                  icon={L.icon({
                    iconUrl:
                      "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Custom marker icon
                    iconSize: [25, 25],
                    iconAnchor: [12, 25],
                  })}
                >
                  <Tooltip direction="top" offset={[0, -10]} opacity={1}>
                    <span className="font-bold text-blue-600">{loc.price}</span>
                  </Tooltip>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Contact);
