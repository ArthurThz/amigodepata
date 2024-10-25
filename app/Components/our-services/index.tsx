import OurServicesCard from "./ourServicesCard";

import Equoterapia from "../../public/ourservices-equoterapia.jpg";
import AnimaisSuporte from "../../public/ourservices-animais-suporte.jpeg";

const OurServices = () => {
  return (
    <div className="w-full h-full min-h-screen py-10 px-7 flex flex-col gap-7 items-center bg-azul-50 lg:items-center lg:justify-center lg:gap-10">
      <h1 className="text-3xl font-poetsenOne text-azul-900 lg:text-5xl">
        O que oferecemos?
      </h1>
      <div className="w-full h-auto flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-14">
        <OurServicesCard
          title="Equoterapia"
          image="/ourservices-equoterapia.jpg"
          description="A equoterapia é uma prática terapêutica que utiliza cavalos como parte do tratamento para promover melhorias na saúde física, emocional e cognitiva dos praticantes. 
        Essa abordagem é indicada para pessoas com diferentes tipos de necessidades especiais, como transtornos neurológicos, deficiências físicas, problemas emocionais e dificuldades de aprendizagem. 
"
        />
        <OurServicesCard
          title="Animais para suporte emocional"
          image="/ourservices-animais-suporte.jpeg"
          description="Animais para suporte emocional são companheiros que proporcionam conforto, segurança e um senso de bem-estar para pessoas que enfrentam condições emocionais ou mentais, como ansiedade, depressão e transtorno de estresse pós-traumático (TEPT). A simples interação com esses animais pode ajudar a reduzir os níveis de estresse e a melhorar o humor, contribuindo para uma melhor qualidade de vida. 
    "
        />
      </div>
    </div>
  );
};

export default OurServices;
