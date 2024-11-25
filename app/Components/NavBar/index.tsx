"use client";

import DesktopView from "./desktop-view";
import MobileView from "./mobile-view";
import { useAppSelector } from "@/redux/store/store";

const NavBar = () => {
  const { isAuth } = useAppSelector((state) => state.userAuth);
  return (
    <div className="z-20 w-full h-[70px] lg:h-[90px] p-5  bg-azul-50 shadow-md shadow-azul-900">
      <div className="w-full hidden lg:flex">
        <DesktopView isAuth={isAuth} />
      </div>
      <div className="w-full flex items-center h-full justify-center lg:hidden">
        <MobileView isAuth={isAuth} />
      </div>
    </div>
  );
};

export default NavBar;
