import { MdCalendarToday, MdHome } from "react-icons/md";
import Menu from "./menu";
import Item from "./menu-item";
import { FaDog, FaUser, FaUserPlus } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

type MenuContainerProps = {
  closeMenu: () => void;
};
const MenuContainer = ({ closeMenu }: MenuContainerProps) => {
  const IS_AUTH = false;
  return (
    <div className="w-full h-screen fixed flex  justify-start bottom-0 z-20 bg-black/40  top-0  right-0 overflow-hidden">
      <Menu closeMenu={closeMenu}>
        {!IS_AUTH ? (
          <div className="w-full flex flex-col items-center gap-5 lg:disabled:">
            <Item
              icon={<MdHome className="text-2xl" />}
              label="Home"
              href="/"
              closeMenu={closeMenu}
            />
            <Item
              icon={<FaPeopleGroup className="text-2xl" />}
              label="Sobre Nós"
              href="/AboutUs"
              closeMenu={closeMenu}
            />
            <Item
              icon={<FaDog className="text-2xl" />}
              label="Nossos Pets"
              href="/OurPets"
              closeMenu={closeMenu}
            />

            <Item
              icon={<FaUserPlus className="text-2xl" />}
              label="Cadastro"
              href="/SignUp"
              closeMenu={closeMenu}
            />
            <Item
              icon={<FaUser className="text-2xl" />}
              label="Login"
              href="/SignIn"
              closeMenu={closeMenu}
            />
          </div>
        ) : (
          <>
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
          </>
        )}
      </Menu>
    </div>
  );
};

export default MenuContainer;
