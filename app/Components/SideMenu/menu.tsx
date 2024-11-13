import { ReactNode } from "react";
import { MdLogout, MdOutlineClose } from "react-icons/md";

type MenuProps = {
  closeMenu: () => void;
  children: ReactNode;
};

const Menu = ({ closeMenu, children }: MenuProps) => {
  const IS_AUTH = false;
  return (
    <div className="w-full lg:w-[320px] h-screen flex flex-col items-center justify-between px-8 py-4 bg-azul-50 ">
      <div className="w-full flex justify-end">
        <button type="button" className="bg-transparent" onClick={closeMenu}>
          <MdOutlineClose className="text-3xl hover:cursor-pointer hover:text-red-500 transition-all ease" />
        </button>
      </div>
      <div className="w-full h-auto min-h-[70%] flex flex-col items-center gap-5 mt-10">
        {children}
      </div>
      <div className="w-full flex justify-end text-azul-950 group">
        {IS_AUTH && (
          <button
            type="button"
            className="bg-transparent flex items-center gap-5"
          >
            <span className="font-roboto text-lg">Sair</span>
            <MdLogout className="text-2xl hover:cursor-pointer group-hover:text-red-500 transition-all ease" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Menu;
