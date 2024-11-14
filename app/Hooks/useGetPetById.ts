import { useEffect, useState } from "react";
import { API_ROUTE } from "../Services/api";
import { AnimalProps } from "../Types/Animals";

export const useGetPetById = ({id} : {id:string}) => {
    const [animal, setAnimal] = useState<AnimalProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [Error, setError] = useState();


    const getAnimal = async() =>{

        try {
            const response = await API_ROUTE.get(`/Pets/${id}`) 
            setAnimal(response.data.content)
            setIsLoading(false)

            if(response.status !== 200){
               
                return console.log("algo deu errado!")
            }

            
            
            
        }catch(err:any) {
            console.error(err)
        }

    }
    useEffect(() => {
        getAnimal()
    }, []);

    return {animal, isLoading}
    
}