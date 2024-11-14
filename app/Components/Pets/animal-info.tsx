import { AnimalProps } from "@/app/Types/Animals";
import Image from "next/image";

type AnimalInfoProps = {
  animalData: AnimalProps[];
};

const AnimalInfo = ({ animalData }: AnimalInfoProps) => {
  const { imagem, nome, idade, raca } = animalData[0];
  return (
    <div className="w-[50%] h-full flex flex-col items-center">
      <Image src={imagem} height={1080} width={920} alt="Imagem do animal" />
      <div className="w-full flex flex-col items-center">
        <h1>{nome}</h1>
        <p className="font-poetsenOne">{`${raca} • ${idade} anos`}</p>
        <p>História do animal</p>
      </div>
    </div>
  );
};

export default AnimalInfo;
