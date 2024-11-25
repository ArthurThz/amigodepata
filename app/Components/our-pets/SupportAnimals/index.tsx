import { useSupportAnimals } from "@/app/Hooks/useSupportAnimals";
import CardContainer from "../Card/cardsContainer";
import Loader from "../../Loader";

const SupportAnimals = () => {
  const { FilteredAnimals, isLoading, filterAnimals, getAllAnimals } =
    useSupportAnimals();

  return (
    <div className="w-full py-10 h-auto bg-azul-200 flex flex-col items-center justify-center gap-16 lg:py-20">
      <h1 className="font-poetsenOne text-azul-900 text-2xl text-center px-4 lg:px-0 lg:text-5xl lg:text-start lg:mb-10">
        Amigos de pata prontos para te dar apoio
      </h1>
      <div className="flex items-center justify-start gap-5 ">
        <button
          onClick={() => getAllAnimals()}
          className="text-sm  font-roboto px-6 py-2 rounded-full bg-white border-2 border-azul-900 hover:opacity-80"
        >
          Todos
        </button>
        <button
          onClick={() => filterAnimals({ animalType: "cachorro" })}
          className="text-sm  font-roboto px-6 py-2 rounded-full bg-white border-2 border-azul-900 hover:opacity-80"
        >
          Cachorro
        </button>
        <button
          onClick={() => filterAnimals({ animalType: "gato" })}
          className="text-sm  font-roboto px-6 py-2 rounded-full bg-white border-2 border-azul-900 hover:opacity-80"
        >
          Gato
        </button>
      </div>
      {isLoading ? (
        <>
          <Loader image="/dogloader.gif" />
        </>
      ) : (
        <CardContainer
          data={FilteredAnimals}
          CardButtonClass="bg-azul-900 text-white  hover:text-azul-900 hover:border-azul-900  hover:bg-azul-300"
          CardClass="bg-white border-white text-azul-900 shadow-azul-900 hover:border-azul-900 hover:shadow-azul-900"
        />
      )}
    </div>
  );
};

export default SupportAnimals;
