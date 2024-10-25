import Horses from "../Components/our-pets/Horses";
import SupportAnimals from "../Components/our-pets/SupportAnimals";

const OurPets = () => {
  return (
    <div className="w-full min-h-screen h-full flex flex-col gap-4 items-center py-10">
      <h1 className="font-poetsenOne text-3xl text-azul-800">Nossos Pets!</h1>
      <Horses />
      <SupportAnimals />
    </div>
  );
};

export default OurPets;
