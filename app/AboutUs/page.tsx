import Image from "next/image";
import OurTeam from "../Components/AboutUs/ourTeam";

const AboutUs = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white gap-[50px] lg:gap-[90px] ">
      <div className="w-full h-auto flex flex-col items-center bg-azul-800 lg:flex-row-reverse lg:h-[750px]">
        <div className="w-auto h-auto flex flex-col items-center gap-5 py-10 px-5 lg:w-[60%] lg:h-full lg:justify-center lg:gap-10">
          <h1 className="font-poetsenOne text-2xl text-white lg:text-5xl">
            Sobre Nós
          </h1>
          <p className="font-poetsenOne text-white font-normal text-md  lg:text-2xl lg:px-20">
            Nosso propósito é proporcionar um ganho motor, diciplinar, social,
            emocional e tudo que faz parte do mundo e necessidades PcD, com um
            impacto positivo na qualidade de vida das famílias atípicas
            brasileiras.
          </p>
        </div>
        <Image
          className="w-full h-[260px] lg:w-[50%] lg:h-full"
          src="/curral.png"
          width={1080}
          height={920}
          alt="imagem cavalo e menina"
        />
      </div>
      <OurTeam />
    </div>
  );
};

export default AboutUs;
