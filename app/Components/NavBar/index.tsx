import Link from "next/link";
import { IoPaw } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className="w-full h-[100px] p-5 flex items-center justify-between bg-azul-50">
      <div className=" text-azul-900 flex items-center justify-center gap-2">
        <h1 className="font-poetsenOne text-[45px]">Amigo de pata</h1>
        <IoPaw className="text-[45px]" />
      </div>
      <div className="flex items-center justify-around gap-5">
        <Link
          className="text-lg text-azul-900 font-roboto font-medium hover:text-laranja-600 transition-all"
          href=""
        >
          Home
        </Link>
        <Link
          className="text-lg text-azul-900 font-roboto font-medium hover:text-laranja-600 transition-all"
          href=""
        >
          Home
        </Link>
        <Link
          className="text-lg text-azul-900 font-roboto font-medium hover:text-laranja-600 transition-all"
          href=""
        >
          Home
        </Link>
        <Link
          className="text-lg text-azul-900 font-roboto font-medium hover:text-laranja-600 transition-all"
          href=""
        >
          Home
        </Link>

        <button
          className="bg-laranja-300 px-12 py-2 rounded-md text-md font-roboto font-bold border border-laranja-300 text-azul-900 shadow-lg
         hover:bg-laranja-100 transition-all ease-out delay-1 hover:shadow-md hover:shadow-laranja-400"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default NavBar;