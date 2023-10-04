import { Outlet, Link } from "react-router-dom";

import HomeIcon from "../components/icons/Home";
import HeartIcon from "../components/icons/Heart";
import PersonIcon from "../components/icons/Person";

const Rootlayout = () => {
  const bgColor = window.Telegram.WebApp.bg_color;
  const secondaryBgColor = window.Telegram.WebApp.secondary_bg_color;

  alert(window.Telegram.WebApp.is_bot);

  return (
    <div className="flex flex-col min-h-screen w-full max-w-[600px] mx-auto">
      <div className={`flex-grow bg-[${bgColor}] p-3`}>
        <Outlet />
      </div>

      <div
        className={`w-full py-2 text-white text-xs bg-[${secondaryBgColor}] w-full flex items-center sticky bottom-0`}
      >
        <Link to="/" className="flex flex-col items-center space-y-1.5 w-1/3">
          <HomeIcon styles="w-5 h-5 text-white" />
          <h1>Home</h1>
        </Link>
        <Link
          to="/matches"
          className="flex flex-col items-center space-y-1.5 w-1/3"
        >
          <HeartIcon styles="w-5 h-5 text-white" />
          <h1>Matches</h1>
        </Link>
        <Link
          to="/profile"
          className="flex flex-col items-center space-y-1.5 w-1/3"
        >
          <PersonIcon styles="w-5 h-5 text-white" />
          <h1>Profile</h1>
        </Link>
      </div>
    </div>
  );
};

export default Rootlayout;
