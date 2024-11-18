import { AnimalProps } from "@/app/Types/Animals";
import { AxiosError } from "axios";
import Image from "next/image";
import ErrorMessage from "../Error";

type AnimalInfoProps = {
  animalData: AnimalProps;
};

const AnimalInfo = ({ animalData }: AnimalInfoProps) => {
  const { imagem, nome, idade, raca } = animalData;

  return (
    <div className="w-full h-full flex  justify-between">
      <div className="w-[40%] flex flex-col justify-start items-start ring-2">
        <Image
          className="w-full"
          src={imagem}
          height={1080}
          width={920}
          alt="Imagem do animal"
        />
        <div className="w-full flex flex-col items-center">
          <h1>{nome}</h1>
          <p className="font-poetsenOne">{`${raca} • ${idade} anos`}</p>
          <p>História do animal</p>
        </div>
      </div>
      <div className="w-[50%]"></div>
    </div>
  );
};

export default AnimalInfo;
