import Link from "next/link";
import SideMenu from "../SideMenu";
import { IoPaw } from "react-icons/io5";

const DesktopView = ({ isAuth }: { isAuth: boolean }) => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className=" text-azul-900 flex items-center justify-center gap-2">
        {isAuth && <SideMenu />}
        <Link href="/" className="flex items-center gap-3">
          <h1 className="font-poetsenOne text-xl lg:text-[45px]">
            Amigo de pata
          </h1>
          <IoPaw className="text-[45px]" />
        </Link>
      </div>
      <div className="flex items-center justify-around gap-5">
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

        {!isAuth && (
          <div className="flex items-center gap-5">
            <Link
              className="text-lg text-azul-900 font-roboto font-medium hover:text-laranja-600 transition-all "
              href="/SignUp"
            >
              Cadastro
            </Link>
            <Link
              href="/SignIn"
              className="py-1 px-6 rounded-lg bg-azul-900 border-2 border-azul-900 shadow-md font-roboto text-lg font-medium text-white hover:bg-transparent hover:border-azul-900 hover:border-2 hover:shadow-lg hover:shadow-azul-900 hover:text-azul-900 transition-all ease"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default DesktopView;
