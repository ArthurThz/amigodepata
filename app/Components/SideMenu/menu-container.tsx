import { MdCalendarToday } from "react-icons/md";
import Menu from "./menu";
import Item from "./menu-item";
import { FaDog } from "react-icons/fa";

type MenuContainerProps = {
  closeMenu: () => void;
};
const MenuContainer = ({ closeMenu }: MenuContainerProps) => {
  return (
    <div className="w-full h-screen fixed flex  justify-end bottom-0 z-20 bg-black/40  top-0  right-0 overflow-hidden">
      <Menu closeMenu={closeMenu}>
        <Item
          icon={<MdCalendarToday className="text-2xl" />}
          label="Meus Agendamentos"
          href="/SignUp"
          closeMenu={closeMenu}
        />
        <Item
          icon={<FaDog className="text-2xl" />}
          label="Acompanhar Adoção"
          href="/"
          closeMenu={closeMenu}
        />
      </Menu>
    </div>
  );
};

export default MenuContainer;
