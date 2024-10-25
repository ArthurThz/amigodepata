import AnimalCard from "../Card";
import CardContainer from "../Card/cardsContainer";

const Horses = () => {
  return (
    <div className="w-full py-10 h-auto bg-laranja-200 flex flex-col items-center gap-16">
      <h1 className="font-poetsenOne text-azul-900 text-2xl text-center">
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
