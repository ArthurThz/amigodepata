import { ReactNode } from "react";
import { MdLogout, MdOutlineClose } from "react-icons/md";

import { motion } from "motion/react";

type MenuProps = {
  closeMenu: () => void;
  children: ReactNode;
};

const Menu = ({ closeMenu, children }: MenuProps) => {
  const IS_AUTH = false;
  return (
    <motion.div
      className="w-full lg:w-[320px] h-screen flex flex-col items-center justify-between px-8 py-4 bg-azul-50 "
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4 }}
    >
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
    </motion.div>
  );
};

export default Menu;
