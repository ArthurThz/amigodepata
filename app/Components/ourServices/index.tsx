import OurServicesCard from "./ourServicesCard";

import Equoterapia from "../../public/ourservices-equoterapia.jpg";
import AnimaisSuporte from "../../public/ourservices-animais-suporte.jpeg";

const OurSercives = () => {
  return (
    <div className="w-full h-screen py-10 px-5 flex flex-col gap-5 items-center bg-azul-50">
      <h1 className="text-xl font-poetsenOne text-azul-900">
        O que oferecemos?
      </h1>
      <OurServicesCard
        title="Equoterapia"
        image={Equoterapia}
        description="A equoterapia é uma prática terapêutica que utiliza cavalos como parte do tratamento para promover melhorias na saúde física, emocional e cognitiva dos praticantes. 
        Essa abordagem é indicada para pessoas com diferentes tipos de necessidades especiais, como transtornos neurológicos, deficiências físicas, problemas emocionais e dificuldades de aprendizagem. 
"
      />
      <OurServicesCard
        title="Animais para suporte emocional"
        image={AnimaisSuporte}
        description="Animais para suporte emocional são companheiros que proporcionam conforto, segurança e um senso de bem-estar para pessoas que enfrentam condições emocionais ou mentais, como ansiedade, depressão e transtorno de estresse pós-traumático (TEPT). A simples interação com esses animais pode ajudar a reduzir os níveis de estresse e a melhorar o humor, contribuindo para uma melhor qualidade de vida. 
    "
      />
    </div>
  );
};

export default OurSercives;
