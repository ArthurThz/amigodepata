import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type AnimalCardProps = {
  cardCustomClass?: string;
  buttonCustomClass?: string;
  nome: string;
  idade: number;
  raca: string;
  imagem: string;
  id:string;
  especialidade:"equoterapia" | "suporte" | string
};
const AnimalCard = ({
  cardCustomClass,
  buttonCustomClass,
  idade,
  nome,
  raca,
  especialidade,
  id,
  imagem,
}: AnimalCardProps) => {
  const redirectUrlPath = especialidade === "equoterapia" ? "Horses" : "SupportAnimals"
  return (
    <div
      className={twMerge(
        "w-[75%] min-h-[300px] bg-laranja-900/70 px-5 py-4 border-2 rounded-md border-marrom-500 flex flex-1 flex-col items-start justify-center gap-2 shadow-lg shadow-white text-white lg:w-[350px] hover:cursor-pointer hover:shadow-2xl hover:border-white hover:shadow-laranja-400 transition-all ease",
        cardCustomClass
      )}
    >
      <Image
        className="w-full h-[250px] rounded-xl"
        src={imagem}
        width={1080}
        height={920}
        alt="imagem do animal"
      />
      <h2 className="font-poetsenOne text-xl">{nome}</h2>
      <p className="font-poetsenOne">{`${raca} • ${idade} anos`}</p>
      <Link
      href={`/Pets/${redirectUrlPath}/${id}`}
        className={twMerge(
          "px-4 py-1 bg-laranja-200 border-2 border-laranja-200 rounded-md text-azul-900 font-poetsenOne text-md hover:text-white hover:bg-transparent hover:border-white hover:border-2 transition-all ease",
          buttonCustomClass
        )}
      >
        Saber mais
      </Link>
    </div>
  );
};

export default AnimalCard;
