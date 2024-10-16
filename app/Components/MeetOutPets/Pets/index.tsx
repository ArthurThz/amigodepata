import Image from "next/image";
import BannerPets from "../../../public/oupets-suporte-emocional.jpg";

const Pets = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center bg-azul-800 lg:flex-row-reverse lg:h-full">
      <div className="w-auto h-auto flex flex-col items-center gap-5 py-10 px-5 lg:w-[50%] lg:h-full lg:justify-center lg:gap-10">
        <h1 className="font-poetsenOne text-2xl text-white lg:text-5xl">
          Nossos Pets
        </h1>
        <p className="font-roboto text-white font-normal text-md lg:w-[60%] text-xl">
          São resgatados de situação de rua ou abandono, fazemos a conexão entre
          pessoas que precisam de um amigo para terem uma vida melhor e um pet
          que precisa de um lar.
        </p>
        <button className="px-10 py-2 border-2 border-laranja-200 bg-laranja-200 text-azul-900 font-bold font-roboto rounded-lg shadow-md shadow-azul-800 hover:bg-azul-800 hover:text-laranja-200 hover:shadow-laranja-300 transition-all ease">
          Conheça nossos pets
        </button>
      </div>
      <Image
        className="w-full h-[260px] lg:w-[60%] lg:h-full"
        src={BannerPets}
        width={1920}
        height={1080}
        alt="imagem cavalo e menina"
      />
    </div>
  );
};

export default Pets;
