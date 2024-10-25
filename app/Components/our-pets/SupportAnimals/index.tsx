import AnimalCard from "../Card";
import CardContainer from "../Card/cardsContainer";

const SupportAnimals = () => {
  return (
    <div className="w-full py-10 h-auto bg-azul-200 flex flex-col items-center gap-16 lg:py-20">
      <h1 className="font-poetsenOne text-azul-900 text-2xl text-center px-4 lg:px-0 lg:text-5xl lg:text-start lg:mb-10">
        Amigos de pata prontos para te dar apoio
      </h1>
      <CardContainer>
        <AnimalCard
          cardCustomClass="bg-white border-2 border-white rounded-lg shadow-xl shadow-azul-900 text-azul-900 hover:shadow-2xl hover:border-azul-900 hover:shadow-azul-900"
          buttonCustomClass="bg-azul-900 text-white border-azul-900 hover:text-azul-900 hover:bg-transparent hover:border-azul-900"
        />
        <AnimalCard
          cardCustomClass="bg-white border-2 border-white rounded-lg shadow-xl shadow-azul-900 text-azul-900 hover:shadow-2xl hover:border-azul-900 hover:shadow-azul-900"
          buttonCustomClass="bg-azul-900 text-white border-azul-900 hover:text-azul-900 hover:bg-transparent hover:border-azul-900"
        />
        <AnimalCard
          cardCustomClass="bg-white border-2 border-white rounded-lg shadow-xl shadow-azul-900 text-azul-900 hover:shadow-2xl hover:border-azul-900 hover:shadow-azul-900"
          buttonCustomClass="bg-azul-900 text-white border-azul-900 hover:text-azul-900 hover:bg-transparent hover:border-azul-900"
        />
        <AnimalCard
          cardCustomClass="bg-white border-2 border-white rounded-lg shadow-xl shadow-azul-900 text-azul-900 hover:shadow-2xl hover:border-azul-900 hover:shadow-azul-900"
          buttonCustomClass="bg-azul-900 text-white border-azul-900 hover:text-azul-900 hover:bg-transparent hover:border-azul-900"
        />
        <AnimalCard
          cardCustomClass="bg-white border-2 border-white rounded-lg shadow-xl shadow-azul-900 text-azul-900 hover:shadow-2xl hover:border-azul-900 hover:shadow-azul-900"
          buttonCustomClass="bg-azul-900 text-white border-azul-900 hover:text-azul-900 hover:bg-transparent hover:border-azul-900"
        />
      </CardContainer>
    </div>
  );
};

export default SupportAnimals;
