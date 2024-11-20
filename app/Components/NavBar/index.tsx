"use client"
import Link from "next/link";
import { IoPaw } from "react-icons/io5";
import SideMenu from "../SideMenu";
import DesktopView from "./desktop-view";
import MobileView from "./mobile-view";
import { useAppSelector } from "@/redux/store/store";

const NavBar = () => {
  const {isAuth} = useAppSelector((state) =>state.userAuth)
  return (
    <div className="z-20 w-full h-[70px] lg:h-[90px] p-5  bg-azul-50 shadow-md shadow-azul-900">
      <div className="w-full hidden lg:flex">
        <DesktopView isAuth={isAuth} />
      </div>
      <div className="w-full flex items-center h-full justify-center lg:hidden">
        <MobileView isAuth={isAuth} />
      </div>
      {/* <div className=" text-azul-900 flex items-center justify-center gap-2">
        {IS_AUTH && <SideMenu />}
        <h1 className="font-poetsenOne text-xl lg:text-[45px]">
          Amigo de pata
        </h1>
        <IoPaw className="text-xl lg:text-[45px]" />
      </div>
      <div className="hidden lg:flex items-center justify-around gap-5">
        <Link
          className="text-lg text-azul-900 font-roboto font-medium hover:text-laranja-600 transition-all"
          href="/"
        >
          Home
        </Link>
        <Link
          className="text-lg text-azul-900 font-roboto font-medium hover:text-laranja-600 transition-all"
          href="/OurPets"
        >
          Nossos Pets
        </Link>
        <Link
          className="text-lg text-azul-900 font-roboto font-medium hover:text-laranja-600 transition-all"
          href="/AboutUs"
        >
          Sobre nós
        </Link>

        {!IS_AUTH && (
          <div className="flex items-center   gap-5">
            <Link
              className="text-lg text-azul-900 font-roboto font-medium hover:text-laranja-600 transition-all "
              href=""
            >
              Cadastro
            </Link>
            <Link
              href="SignIn"
              className="py-1 px-6 rounded-lg bg-azul-900 border-2 border-azul-900 shadow-md font-roboto text-lg font-medium text-white hover:bg-transparent hover:border-azul-900 hover:border-2 hover:shadow-lg hover:shadow-azul-900 hover:text-azul-900 transition-all ease"
            >
              Login
            </Link>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default NavBar;
