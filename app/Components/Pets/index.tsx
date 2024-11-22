"use client";
import { useGetPetById } from "@/app/Hooks/useGetPetById";
import AnimalInfo from "./animal-info";
import Loader from "../Loader";
import ErrorMessage from "../Error";
import PetCardInfo from "./card-info";
import { GiHealing } from "react-icons/gi";
import { FaDog, FaHorseHead } from "react-icons/fa";

type AnimalInfoProps = {
  animalId: string;
  especialidade: "equoterapia" | "suporte";
  pageTitle: string;
};

const Pets = ({ animalId, especialidade, pageTitle }: AnimalInfoProps) => {
  const { animal, isLoading, error } = useGetPetById({
    id: animalId,
    especialidade,
  });
  if (isLoading) return <Loader />;
  return (
    <div className="w-full flex lg:flex-col items-center h-screen">
      {error && <ErrorMessage />}
      {animal && (
        <AnimalInfo animalData={animal} pageTitle={pageTitle}>
          {especialidade === "equoterapia" ? (
            <>
              <PetCardInfo
                icon={<FaHorseHead className="text-azul-800 text-2xl" />}
                title="Qual o proposito da equoterapia?"
                text="Equoterapia é um método terapêutico e educacional, que utiliza o cavalo
dentro de uma abordagem multidisciplinar e interdisciplinar, nas áreas
de saúde, educação e equitação, buscando o desenvolvimento
biopsicossocial de pessoas com deficiências e/ou necessidades especiais.
Conceito da ANDE-BRASIL, 1999.
"
              />
              <PetCardInfo
                icon={<GiHealing className="text-azul-800 text-2xl" />}
                title="Beneficios da equoterapia"
                text="Desenvolver o controle postural do praticante pelo estímulo à via dos substratos do controle motor local.
Desenvolver o equilíbrio do praticante pelo estímulo aos substratos de controle motor postural, reações de ajuste, de defesa e de endireitamento corporais.
Aperfeiçoar o assento do praticante sobre o cavalo pelo estímulo do controle motor global. Nesta fase o praticante aperfeiçoa e aplica feedback/feedforward adquiridos, que o permitem manter-se equilibrado sobre à sela e unir-se coordenada e harmoniosamente aos movimentos do cavalo, desenvolvendo com o animal um conjunto biomecânico melodioso."
              />
            </>
          ) : (
            <>
              <PetCardInfo
                icon={<FaDog className="text-azul-800 text-2xl" />}
                title="O proposito dos animais de suporte?"
                text="Os animais de suporte desempenham um papel essencial no bem-estar emocional e físico de pessoas que enfrentam desafios de saúde mental, física ou emocional. Esses animais, como cães, gatos e até cavalos em práticas como a equoterapia, oferecem conforto, companhia e ajudam a reduzir o estresse, ansiedade e depressão. Além disso, promovem autoestima, socialização e, em alguns casos, auxiliam no desenvolvimento motor e cognitivo. Sua presença é terapêutica, proporcionando uma conexão única e empática que melhora a qualidade de vida dos indivíduos.
"
              />
              <PetCardInfo
                icon={<GiHealing className="text-azul-800 text-2xl" />}
                title="Beneficios do suporte com animais"
                text="Os benefícios dos animais de suporte são amplos e impactam positivamente diversas áreas da vida. Eles ajudam a reduzir níveis de estresse, ansiedade e depressão, promovendo maior estabilidade emocional. Além disso, a interação com esses animais estimula a liberação de hormônios como a oxitocina, que está associada a sentimentos de bem-estar e conexão.

Fisicamente, animais como cavalos na equoterapia auxiliam no fortalecimento muscular, equilíbrio e coordenação motora. Socialmente, eles incentivam a interação e ajudam a combater a solidão, proporcionando um senso de propósito e pertencimento. No geral, os animais de suporte contribuem para uma vida mais saudável, equilibrada e feliz."
              />
            </>
          )}
        </AnimalInfo>
      )}
    </div>
  );
};

export default Pets;
