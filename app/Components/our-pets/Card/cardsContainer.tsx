import { AnimalProps } from "@/app/Types/Animals";
import AnimalCard from ".";
import { useEffect } from "react";

type CardContainerProps = {
  data: AnimalProps[];
  CardClass?: string;
  CardButtonClass?: string;
};

const CardContainer = ({
  data,
  CardButtonClass,
  CardClass,
}: CardContainerProps) => {
  return (
    <div className="w-full h-full flex flex-col items-center gap-10 lg:grid lg:grid-cols-4 lg:place-items-center lg:gap-10">
      {data &&
        data.map((animal, index) => {
          const {
            idade,
            nome,
            raca,
            imagem,
            codanimal,
            especialidade,
            tipoanimal,
          } = animal;
          return (
            <AnimalCard
              cardCustomClass={CardClass}
              buttonCustomClass={CardButtonClass}
              key={codanimal}
              nome={nome}
              idade={idade}
              raca={raca}
              imagem={imagem}
            />
          );
        })}
    </div>
  );
};

export default CardContainer;
