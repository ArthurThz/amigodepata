import { useEffect, useState } from "react";
import { API_ROUTE } from "../Services/api";
import { AnimalProps } from "../Types/Animals";
import { animate } from "motion";


export const useSupportAnimals =  () =>{
    const [Animals, setAnimals] = useState<AnimalProps[]>([]);
    const [FilteredAnimals, setFilteredAnimals] = useState<AnimalProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const filterAnimals = ({animalType} : {animalType : "cachorro" | "gato" }) =>{

        if(animalType === "cachorro"){
            let filteredAnimals = Animals.filter((animal) => animal.tipoanimal === animalType)
            setFilteredAnimals(filteredAnimals)
        }
        if(animalType === "gato"){
            let filteredAnimals = Animals.filter((animal) => animal.tipoanimal === animalType)
            setFilteredAnimals(filteredAnimals)
        }

       
    }

    const getAllAnimals = () =>{
        setFilteredAnimals(Animals)
    }
  
    const fetchAnimals = async() =>{
        setIsLoading(true)
        const response = await API_ROUTE.get("/SupportAnimals")
        setAnimals(response.data.content)
        setFilteredAnimals(response.data.content)
        setIsLoading(false)
    }   
   
    useEffect(() => {
        if(Animals.length === 0){
            console.log("fetched Data")

            fetchAnimals()
        }
    }, [filterAnimals]);

    return {Animals, isLoading, filterAnimals, FilteredAnimals, getAllAnimals}
}