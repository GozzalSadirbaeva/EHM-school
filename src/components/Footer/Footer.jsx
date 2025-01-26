const Footer = () => {
  return (
    <div className=" bg-[#315033] rounded-t-[30px]">
      <footer className="container text-white py-10">
        <div className=" px-6 grid grid-cols-1 md:grid-cols-2 md:gap-[200px]">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <img src="/logo2.svg" alt="" />
              </div>
            </div>
            <p className="font-medium text-sm leading-6">
              Where every game is a lesson, and every lesson is a game. <br />{" "}
              Our app transforms education into playful games, <br />{" "}
              captivating young minds with interactive fun.
            </p>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-2  gap-[40px] pt-9 ">
            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-[18px] mb-6 leading-6">
                Quick links
              </h3>
              <ul className="space-y-3 font-semibold text-base  leading-6">
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Games
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Subjects
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-bold text-[18px] mb-6 leading-6">Company</h3>
              <ul className="space-y-3 font-semibold text-base  leading-6">
                <li>
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Career
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="font-bold text-[18px] mb-6 leading-6">
                Connect with us
              </h3>
              <ul className="space-y-3 font-semibold text-base  leading-6">
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
                <li>
                  <a href="#" className="flex items-center hover:underline">
                    <img src="/tiktok.svg" alt="" className="pr-[10px]" />{" "}
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-green-700 mt-8 pt-4">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between text-sm">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
              <a href="#" className="hover:underline">
                Support
              </a>
            </div>
            <p>© Copyright 2025, All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
