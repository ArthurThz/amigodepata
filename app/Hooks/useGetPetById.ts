import { useEffect, useState } from "react";
import { API_ROUTE } from "../Services/api";
import { AnimalProps } from "../Types/Animals";


export const useGetPetById = ({id} : {id:string}) => {
    const [animal, setAnimal] = useState<AnimalProps | null >();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();


    const getAnimal = async() =>{

        try {
            const response = await API_ROUTE.get(`/Pets/${id}`) 
          

            if(response.status !== 200){
               
                return console.log("algo deu errado!")
            }
            setAnimal(response.data.content[0])
            setIsLoading(false)

            
            
            
        }catch(err:any) {
            console.error(err)
            setError(err)
            setIsLoading(false)
        }

    }
    useEffect(() => {
        getAnimal()
    }, []);

    return {animal, isLoading,error }
    
}