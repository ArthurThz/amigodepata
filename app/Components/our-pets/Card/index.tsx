import Image from "next/image";
import { twMerge } from "tailwind-merge";

type AnimalCardProps = {
  cardCustomClass?: string;
  buttonCustomClass?: string;
};
const AnimalCard = ({
  cardCustomClass,
  buttonCustomClass,
}: AnimalCardProps) => {
  return (
    <div
      className={twMerge(
        "w-[75%] min-h-[300px] bg-marrom-500 px-5 py-4 border-2 rounded-md border-marrom-500 flex flex-col items-start justify-center gap-2 shadow-lg shadow-white text-white lg:w-[350px] hover:cursor-pointer hover:shadow-2xl hover:border-white hover:shadow-laranja-400 transition-all ease",
        cardCustomClass
      )}
    >
      <Image
        className="w-full h-[250px] rounded-xl"
        src="https://cavalus.com.br/wp-content/uploads/2018/11/BH-Historoa-4.jpg"
        width={1080}
        height={920}
        alt="imagem do animal"
      />
      <h2 className="font-poetsenOne text-xl">Pé de pano</h2>
      <p className="font-poetsenOne">Brasileiro de Hipismo • 5 anos</p>
      <button
        className={twMerge(
          "px-4 py-1 bg-laranja-200 border-2 border-laranja-200 rounded-md text-azul-900 font-poetsenOne text-md hover:text-white hover:bg-transparent hover:border-white hover:border-2 transition-all ease",
          buttonCustomClass
        )}
      >
        Saber mais
      </button>
    </div>
  );
};

export default AnimalCard;
