"use client";
import { useState } from "react";
import { MdOutlineClose, MdOutlineMenu } from "react-icons/md";
import MenuContainer from "./menu-container";

const SideMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    const body = document.getElementsByTagName("body");
    const scrollBehavior = isMenuOpen ? "visible" : "hidden";
    body[0].style.overflow = scrollBehavior;
    setIsMenuOpen(isMenuOpen ? false : true);
  };
  return (
    <div className="w-[40px] flex items-center py-2 block-scrolling">
      <button onClick={toggleMenu}>
        <MdOutlineMenu className="text-3xl hover:cursor-pointer" />
      </button>
      {isMenuOpen && <MenuContainer closeMenu={toggleMenu} />}
    </div>
  );
};

export default SideMenu;
