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
  id: string;
  especialidade: "equoterapia" | "suporte" | string;
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
  const redirectUrlPath =
    especialidade === "equoterapia" ? "Horses" : "SupportAnimals";
  return (
    <div
      className={twMerge(
        "w-[75%] min-h-[450px] bg-azul-100 px-6 py-5 border-2 rounded-md border-trasparent flex flex-1 flex-col items-start justify-center gap-2 shadow-md shadow-azul-900 text-azul-900 antialiased lg:w-[350px] hover:cursor-pointer hover:shadow-lg hover:border-azul-900 hover:shadow-azul-900 transition-all ease",
        cardCustomClass
      )}
    >
      <h2 className="font-poetsenOne text-2xl">{nome}</h2>
      <Image
        className="w-full h-[250px] rounded-xl ring-2 ring-azul-900 shadow-md shadow-azul-900"
        src={imagem}
        width={1080}
        height={920}
        alt="imagem do animal"
      />

      <p className="font-roboto font-bold mt-4">{`${raca} • ${idade} anos`}</p>
      <Link
        href={`/Pets/${redirectUrlPath}/${id}`}
        className={twMerge(
          "px-6 py-2 bg-azul-900 rounded-lg shadow-md shadow-azul-900 text-white font-roboto font-bold text-md  hover:bg-azul-600  hover:shadow-md hover:shadow-azul-900 transition-all ease",
          buttonCustomClass
        )}
      >
        Saber mais
      </Link>
    </div>
  );
};

export default AnimalCard;
