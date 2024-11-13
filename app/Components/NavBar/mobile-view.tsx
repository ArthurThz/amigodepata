import SideMenu from "../SideMenu";
import { IoPaw } from "react-icons/io5";

const MobileView = () => {
  return (
    <div className="w-full flex items-center ">
      <SideMenu />
      <div className=" text-azul-900 flex items-center justify-center gap-2">
        <h1 className="font-poetsenOne text-2xl">Amigo de pata</h1>
        <IoPaw className="text-2xl" />
      </div>
    </div>
  );
};

export default MobileView;
