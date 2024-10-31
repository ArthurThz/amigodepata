import { useSupportAnimals } from "@/app/Hooks/useSupportAnimals";
import CardContainer from "../Card/cardsContainer";
import Loader from "../../Loader";

const SupportAnimals = () => {
  const { Animals, isLoading } = useSupportAnimals();
  return (
    <div className="w-full py-10 h-auto bg-azul-200 flex flex-col items-center gap-16 lg:py-20">
      <h1 className="font-poetsenOne text-azul-900 text-2xl text-center px-4 lg:px-0 lg:text-5xl lg:text-start lg:mb-10">
        Amigos de pata prontos para te dar apoio
      </h1>
      {isLoading ? (
        <>
          <Loader image="/dogloader.gif" />
        </>
      ) : (
        <CardContainer
          data={Animals}
          CardButtonClass="bg-azul-900 text-white border-azul-900 hover:text-azul-900 hover:border-azul-900"
          CardClass="bg-white border-white text-azul-900 shadow-azul-900 hover:border-azul-900 hover:shadow-azul-900"
        />
      )}
    </div>
  );
};

export default SupportAnimals;
