import Image from "next/image";
import BannerCavalo from "../../../public/ourpets-equoterapia.jpg";

const Horses = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center bg-laranja-200">
      <div className="w-auto h-auto flex flex-col items-center gap-5 py-10 px-5">
        <h1 className="font-poetsenOne text-2xl text-azul-800">
          Nossos Cavalos
        </h1>
        <p className="font-roboto text-azul-900 font-normal text-md">
          São treinados para oferecer a melhor qualidade em nossas terapias,
          nossos cuidadores garantem o melhor tratamento possível para nossos
          amigos de patas.
        </p>
        <button className="px-10 py-2 border-2 border-azul-900 bg-azul-900 text-white font-roboto rounded-lg shadow-lg shadow-laranja-300 hover:bg-laranja-300/50 hover:text-azul-900 hover:font-bold hover:shadow-azul-800 transition-all ease">
          Conheça nossos cavalos
        </button>
      </div>
      <Image
        className="w-full h-[260px]"
        src={BannerCavalo}
        width={500}
        height={500}
        alt="imagem cavalo e menina"
      />
    </div>
  );
};

export default Horses;
