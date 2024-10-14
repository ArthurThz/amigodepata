import Image from "next/image";
import BannerPets from "../../../public/oupets-suporte-emocional.jpg";

const Pets = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center bg-azul-800">
      <div className="w-auto h-auto flex flex-col items-center gap-5 py-10 px-5">
        <h1 className="font-poetsenOne text-2xl text-white">Nossos Pets</h1>
        <p className="font-roboto text-white font-normal text-md">
          São resgatados de situação de rua ou abandono, fazemos a conexão entre
          pessoas que precisam de um amigo para terem uma vida melhor e um pet
          que precisa de um lar.
        </p>
        <button className="px-10 py-2 border-2 border-laranja-200 bg-laranja-200 text-azul-900 font-bold font-roboto rounded-lg shadow-lg shadow-azul-800 hover:bg-azul-800 hover:text-laranja-200 hover:shadow-azul-100 transition-all ease">
          Conheça nossos pets
        </button>
      </div>
      <Image
        className="w-full h-[260px]"
        src={BannerPets}
        width={500}
        height={500}
        alt="imagem cavalo e menina"
      />
    </div>
  );
};

export default Pets;
