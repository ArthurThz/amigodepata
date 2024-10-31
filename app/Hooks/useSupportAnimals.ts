import { useEffect, useState } from "react";
import { API_ROUTE } from "../Services/api";
import { AnimalProps } from "../Types/Animals";


export const useSupportAnimals =  () =>{
    const [Animals, setAnimals] = useState<AnimalProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);
  
    const fetchAnimals = async() =>{
        setIsLoading(true)
        const response = await API_ROUTE.get("/SupportAnimals")
        setAnimals(response.data.content)
        setIsLoading(false)
    }   

    useEffect(() => {
        fetchAnimals()
    }, []);

    return {Animals, isLoading}
}