import Link from "next/link";
import { ReactNode } from "react";

type MenuItemProps = {
  icon: ReactNode;
  label: string;
  href: string;
  closeMenu: () => void;
};

const Item = ({ closeMenu, href, icon, label }: MenuItemProps) => {
  return (
    <Link
      onClick={closeMenu}
      href={href}
      className="w-[80%] lg:w-full flex h-auto items-center text-azul-950 py-5 text-lg rounded-lg justify-start px-6 lg:px-4 gap-5 font-roboto hover:ring-2 hover:ring-azul-800/80 hover:shadow-lg hover:shadow-azul-800/50"
    >
      {icon}
      <p>{label}</p>
    </Link>
  );
};

export default Item;
