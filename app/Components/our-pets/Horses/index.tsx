import axios from "axios";
import AnimalCard from "../Card";
import CardContainer from "../Card/cardsContainer";
import { useEffect, useState } from "react";
import { AnimalProps } from "@/app/Types/Animals";
import { useGetHorses } from "@/app/Hooks/useHorses";
import Image from "next/image";
import Loader from "../../Loader";

const Horses = () => {
  const { Horses, isLoading } = useGetHorses();
  return (
    <div className="w-full py-10 h-auto bg-azul-400 flex flex-col items-center gap-16 lg:py-20 ">
      <h1 className="font-poetsenOne text-zinc-100 text-2xl text-center lg:text-start lg:text-5xl lg:mb-1 ">
        Nossos equoterapêutas!
      </h1>
      {isLoading ? (
        <Loader image="/horseloader.gif" />
      ) : (
        <>
          <CardContainer data={Horses} />
        </>
      )}
    </div>
  );
};

export default Horses;
