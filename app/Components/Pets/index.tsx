"use client";
import { useGetPetById } from "@/app/Hooks/useGetPetById";
import AnimalInfo from "./animal-info";

type AnimalInfoProps = {
  animalId: string;
};

const Pets = ({ animalId }: AnimalInfoProps) => {
  const { animal, isLoading } = useGetPetById({ id: animalId });

  return (
    <div className="w-full flex lg:flex-col items-center h-screen">
      {!isLoading && <AnimalInfo animalData={animal} />}
    </div>
  );
};

export default Pets;
