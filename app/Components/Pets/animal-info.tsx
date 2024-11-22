import { AnimalProps } from "@/app/Types/Animals";
import { AxiosError } from "axios";
import Image from "next/image";
import ErrorMessage from "../Error";
import PetCardInfo from "./card-info";
import { FaHorseHead, FaWhatsapp } from "react-icons/fa";
import { TbHeartPlus } from "react-icons/tb";
import { GiHealing } from "react-icons/gi";

type AnimalInfoProps = {
  animalData: AnimalProps;
};

const AnimalInfo = ({ animalData }: AnimalInfoProps) => {
  const { imagem, nome, idade, raca } = animalData;

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
          Tem interesse em agendar uma sessão de equoterapia?
        </h2>
        <div className="w-full flex items-center justify-center gap-4 py-8">
          <PetCardInfo
            icon={<FaHorseHead className="text-azul-800 text-2xl" />}
            title="Qual o proposito da equoterapia?"
            text="Equoterapia é um método terapêutico e educacional, que utiliza o cavalo
dentro de uma abordagem multidisciplinar e interdisciplinar, nas áreas
de saúde, educação e equitação, buscando o desenvolvimento
biopsicossocial de pessoas com deficiências e/ou necessidades especiais.
Conceito da ANDE-BRASIL, 1999.
"
          />
          <PetCardInfo
            icon={<GiHealing className="text-azul-800 text-2xl" />}
            title="Beneficios da equoterapia"
            text="Desenvolver o controle postural do praticante pelo estímulo à via dos substratos do controle motor local.
Desenvolver o equilíbrio do praticante pelo estímulo aos substratos de controle motor postural, reações de ajuste, de defesa e de endireitamento corporais.
Aperfeiçoar o assento do praticante sobre o cavalo pelo estímulo do controle motor global. Nesta fase o praticante aperfeiçoa e aplica feedback/feedforward adquiridos, que o permitem manter-se equilibrado sobre à sela e unir-se coordenada e harmoniosamente aos movimentos do cavalo, desenvolvendo com o animal um conjunto biomecânico melodioso."
          />
        </div>
        <div className="w-full flex flex-col items-center py-8 gap-5">
          <p className="w-[50%] text-center text-lg font-roboto text-azul-50 font-bold">
            Clique no botão para enviar uma mensagem para a ong responsável
            pelo(a) {nome} e faça já o seu agendamento!
          </p>

          <button className="flex items-center gap-4 bg-azul-200 px-6 py-4 rounded-md ring-2 ring-azul-200 hover:bg-azul-50 text-lg font-medium text-azul-950 font-roboto hover:shadow-lg hover:shadow-azul-400 group transition-all ease">
            Solicitar Agendamento{" "}
            <FaWhatsapp className="group-hover:text-green-800 text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimalInfo;
