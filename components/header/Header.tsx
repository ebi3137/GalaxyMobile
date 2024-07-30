

import Banner from "./Banner";
import DesktopHeaderBottom from "./desktop/bottom-header/DesktopHeaderBottom";
import DesktopHeaderTop from "./desktop/top-header/DesktopHeaderTop";
import MobileHeaderApp from "./mobile/MobileHeaderApp";
import MobileHeaderSearch from "./mobile/MobileHeaderSearch";

const Header: React.FC = () => {
  return (
    <header className="w-full lg:fixed top-0 z-10 shadow lg:shadow-none overflow-hidden lg:overflow-visible">
      <div className="flex flex-col">
      <Banner />
      <MobileHeaderApp/>
      <MobileHeaderSearch/>
      <DesktopHeaderTop/>
      <DesktopHeaderBottom/>
      </div>
    </header>
  );
};

export default Header;
