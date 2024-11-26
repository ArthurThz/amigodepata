import { AnimalProps } from "@/app/Types/Animals";

import Image from "next/image";

import { FaWhatsapp } from "react-icons/fa";

import { ReactNode } from "react";

import { sendWppMessage } from "@/app/utils/send-wpp-message";
import { useSendMessage } from "@/app/Hooks/useSendMessage";
import { useAppSelector } from "@/redux/store/store";

type AnimalInfoProps = {
  animalData: AnimalProps;
  pageTitle: string;
  children: ReactNode;
};

const AnimalInfo = ({ animalData, pageTitle, children }: AnimalInfoProps) => {
  const { imagem, nome, idade, raca, especialidade } = animalData;
  const { uuid } = useAppSelector((state) => state.userAuth);
  console.log(especialidade);
  return (
    <div className="w-full h-full flex  justify-between ">
      <div className="w-[40%] flex flex-col justify-start items-start">
        <Image
          className="w-full"
          src={imagem}
          height={1080}
          width={920}
          alt="Imagem do animal"
        />
        <div className="w-full flex flex-col mt-4 px-4">
          <h1 className="font-poetsenOne text-4xl text-azul-900">{nome}</h1>
          <p className="font-poetsenOne text-lg text-azul-800">{`${raca} • ${idade} anos`}</p>
          <p className="text-md font-roboto text-azul-800 text-justify pr-2 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi,
            impedit ullam explicabo facere aliquam quaerat in doloribus sed
            fugit, laudantium totam, laborum iure ipsa earum quis suscipit!
            Excepturi, commodi! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Eligendi, accusantium, explicabo quasi facilis ut
            possimus exercitationem doloribus, reiciendis adipisci illum magni
            asperiores itaque odio temporibus obcaecati dolores? Quod, aut
            perferendis? Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </p>
        </div>
      </div>
      <div className="w-[60%] bg-azul-900 flex flex-col py-8">
        <h2 className="text-4xl font-roboto font-bold text-azul-100 text-center">
          {pageTitle}
        </h2>
        <div className="w-full flex items-center justify-center gap-4 py-8">
          {children}
        </div>
        <div className="w-full flex flex-col items-center py-8 gap-5">
          <p className="w-[50%] text-center text-lg font-roboto text-azul-50 font-bold">
            Clique no botão para enviar uma mensagem para a ong responsável
            pelo(a) {nome} e faça já o seu agendamento!
          </p>

          <button
            onClick={() =>
              useSendMessage({ type: especialidade, userId: uuid })
            }
            className="flex items-center gap-4 bg-laranja-200 px-6 py-4 rounded-md  hover:bg-azul-50 text-lg font-medium text-azul-950 font-roboto hover:shadow-xl hover:shadow-azul-400 group transition-all ease delay-75"
          >
            Solicitar Agendamento{" "}
            <FaWhatsapp className="group-hover:text-green-800 text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimalInfo;
