import { useEffect, useState } from "react";
import { API_ROUTE } from "../Services/api";
import { AnimalProps } from "../Types/Animals";


export const useGetHorses =  () =>{
    const [Horses, setHorses] = useState<AnimalProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);
  
    const fetchHorses = async() =>{
        setIsLoading(true)
        const response = await API_ROUTE.get("/Horses")
        setHorses(response.data.content)
        setIsLoading(false)
    }   

    useEffect(() => {
        fetchHorses()
    }, []);

    return {Horses, isLoading}
}