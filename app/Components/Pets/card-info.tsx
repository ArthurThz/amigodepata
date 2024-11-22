import { ReactNode } from "react";
import { FaHorse, FaHorseHead } from "react-icons/fa";

type PetCardInfoProps = {
  title: string;
  text: string;
  icon?: ReactNode;
};

const PetCardInfo = ({ text, title, icon }: PetCardInfoProps) => {
  return (
    <div className="w-[400px] h-[350px] ring-2 ring-azul-800 bg-zinc-200 overflow-auto rounded-lg p-6 shadow-lg shadow-azul-900/60">
      <div className="w-full flex items-center justify-center gap-2">
        <h2 className=" text-lg font-roboto font-bold text-azul-900">
          {title}
        </h2>
        {icon}
      </div>
      <p className="mt-4 font-roboto text-azul-800 text-justify">{text}</p>
    </div>
  );
};

export default PetCardInfo;
// Qual o proposito da equoterapia?
// Equoterapia é um método terapêutico e educacional, que utiliza o cavalo
// dentro de uma abordagem multidisciplinar e interdisciplinar, nas áreas
// de saúde, educação e equitação, buscando o desenvolvimento
// biopsicossocial de pessoas com deficiências e/ou necessidades especiais.
// Conceito da ANDE-BRASIL, 1999.
