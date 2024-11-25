import Link from "next/link";
import SideMenu from "../SideMenu";
import { IoPaw } from "react-icons/io5";

const MobileView = ({ isAuth }: { isAuth: boolean }) => {
  return (
    <div className="w-full flex items-center ">
      <SideMenu />
      <div className=" text-azul-900 flex items-center justify-center gap-2">
        <Link href="/" className="flex items-center gap-3">
          <h1 className="font-poetsenOne text-xl lg:text-[45px]">
            Amigo de pata
          </h1>
          <IoPaw className="text-[25px]" />
        </Link>
      </div>
    </div>
  );
};

export default MobileView;
