import { MdCalendarToday, MdHome } from "react-icons/md";
import Menu from "./menu";
import Item from "./menu-item";
import { FaDog, FaUser, FaUserPlus } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "@/redux/store/store";
import { IoLogOut } from "react-icons/io5";
import { logOut } from "@/redux/store/features/authSlice";
import { useRouter } from "next/navigation";

type MenuContainerProps = {
  closeMenu: () => void;
};
const MenuContainer = ({ closeMenu }: MenuContainerProps) => {
  const { isAuth } = useAppSelector((state) => state.userAuth);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const logOutUser = () => {
    dispatch(logOut());
    closeMenu();
    router.push("/");
  };
  return (
    <div className="w-full h-screen fixed flex  justify-start bottom-0 z-20 bg-black/40  top-0  right-0 overflow-hidden">
      <Menu closeMenu={closeMenu}>
        {!isAuth ? (
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
          <div className="h-full w-full flex flex-col items-center justify-between">
            <div className="w-full h-auto flex flex-col items-center gap-5">
              <Item
                icon={<MdCalendarToday className="text-2xl" />}
                label="Meus Agendamentos"
                href={`/MyAppointments`}
                closeMenu={closeMenu}
              />
            </div>
            <button
              onClick={logOutUser}
              type="button"
              className="w-[80%] lg:w-full flex h-auto items-center text-azul-950 py-5 text-lg rounded-lg justify-start px-6 lg:px-4 gap-5 font-roboto hover:ring-2 hover:ring-azul-800/80 hover:shadow-lg hover:shadow-azul-800/50"
            >
              <IoLogOut className="text-xl" />
              Sair
            </button>
          </div>
        )}
      </Menu>
    </div>
  );
};

export default MenuContainer;
