import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-[#315033] rounded-t-[30px]">
      <footer className="container text-white py-10">
        <div className=" px-6 grid grid-cols-1 md:grid-cols-2 md:gap-[200px]">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <img src="/logo1.svg" alt="" />
              </div>
            </div>
            <p className="font-medium text-sm leading-6">
              Har bir bolaning ichida katta imkoniyatlar bor – biz ularni <br />{" "}
              kashf etish va rivojlantirish uchun yordam beramiz!
            </p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-2  gap-[40px] pt-9 ">
            <div>
              <h3 className="font-bold text-[18px] mb-6 leading-6">Pages</h3>
              <div className="space-y-3 font-semibold text-base  leading-6 grid">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/program"}>Educational program</NavLink>
                <NavLink to={"/application"}>Submit an application</NavLink>
                <NavLink to={"/contact"}>Contact</NavLink>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="font-bold text-[18px] mb-6 leading-6">
                Connect with us
              </h3>
              <ul className="space-y-6 font-semibold text-base  leading-6">
                <li>
                  <a href="#" className="flex items-center hover:underline">
                    <img src="/facebook.svg" alt="" className="pr-[10px]" />
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center hover:underline">
                    <img src="/instagram.svg" alt="" className="pr-[10px]" />{" "}
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center hover:underline">
                    <img src="/twitter.svg" alt="" className="pr-[10px]" />{" "}
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-green-700 mt-8 pt-4">
          <div className="max-w-7xl mx-auto px-6 ">
            <p className="text-center font-semibold text-sm leading-6">
              © Copyright 2025, All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
