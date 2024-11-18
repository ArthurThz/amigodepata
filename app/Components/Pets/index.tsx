"use client";
import { useGetPetById } from "@/app/Hooks/useGetPetById";
import AnimalInfo from "./animal-info";
import Loader from "../Loader";
import ErrorMessage from "../Error";

type AnimalInfoProps = {
  animalId: string;
};

const Pets = ({ animalId }: AnimalInfoProps) => {
  const { animal, isLoading, error } = useGetPetById({ id: animalId });
  if (isLoading) return <Loader />;
  return (
    <div className="w-full flex lg:flex-col items-center h-screen">
      {error && <ErrorMessage />}
      {animal && <AnimalInfo animalData={animal} />}
    </div>
  );
};

export default Pets;
