import Link from "next/link";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { IoPaw } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="w-full py-10 px-10 flex flex-col items-center justify-center bg-laranja-200">
      <div className="w-[80%]  flex flex-col items-start  lg:flex-row lg:justify-between ">
        <div className="w-auto flex flex-col items-start">
          <h3 className="text-azul-800 font-poetsenOne text-2xl flex items-center gap-2 mb-10">
            Amigos de pata <IoPaw />
          </h3>
          <nav className="flex flex-col items-start gap-2 text-azul-800 font-roboto font-medium">
            <Link
              className="text-lg text-azul-900 font-roboto font-medium hover:text-laranja-900 hover:font-bold transition-all"
              href=""
            >
              Home
            </Link>
            <Link
              className="text-lg text-azul-900 font-roboto font-medium hover:text-laranja-900 hover:font-bold transition-all"
              href=""
            >
              Nossos Pets
            </Link>
            <Link
              className="text-lg text-azul-900 font-roboto font-medium hover:text-laranja-900 hover:font-bold transition-all"
              href=""
            >
              Sobre nós
            </Link>
            <Link
              className="text-lg text-azul-900 font-roboto font-medium hover:text-laranja-900 hover:font-bold transition-all"
              href=""
            >
              Cadastro
            </Link>

            <div className="w-full flex gap-2 items-center mt-2">
              <RiInstagramFill className="text-azul-800 text-3xl hover:text-laranja-900 transition-all ease hover:cursor-pointer hover:scale-[1.2]" />
              <FaFacebookSquare className="text-azul-800 text-3xl hover:text-laranja-900 transition-all ease hover:cursor-pointer hover:scale-[1.2]" />
              <AiFillTikTok className="text-azul-800 text-3xl hover:text-laranja-900 transition-all ease hover:cursor-pointer hover:scale-[1.2]" />
            </div>
          </nav>
        </div>

        <h2 className="font-poetsenOne text-2xl text-azul-800 mt-10 lg:w-[25%]">
          "O amor incondicional de um animal é uma terapia silenciosa, trazendo
          paz e alívio para quem enfrenta os desafios do dia a dia."
        </h2>
      </div>
      <span className="w-full text-center text-azul-800 mt-10">
        © Todos os direitos reservados 2024
      </span>
    </footer>
  );
};

export default Footer;
