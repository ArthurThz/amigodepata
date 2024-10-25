import AnimalCard from "../Card";
import CardContainer from "../Card/cardsContainer";

const Horses = () => {
  return (
    <div className="w-full py-10 h-auto bg-laranja-200 flex flex-col items-center gap-16 lg:py-20">
      <h1 className="font-poetsenOne text-azul-900 text-2xl text-center lg:text-start lg:text-5xl lg:mb-10">
        Terapeutas de quatro patas
      </h1>
      <CardContainer>
        <AnimalCard />
        <AnimalCard />
        <AnimalCard />
        <AnimalCard />
      </CardContainer>
    </div>
  );
};

export default Horses;
