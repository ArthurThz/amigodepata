import { useState } from "react";
import { API_ROUTE } from "../Services/api";

type statusProps = {
    status: "isLoading" | "error" | "idle"
}
export const useGetAppointment = ({userId} : {userId:string}) => {
    const [setAppointments, setsetAppointments] = useState();
    const [status, setStatus] = useState<statusProps>({status:"idle"});
     
    const getAppointments = async() => {
        try {
            const response = await API_ROUTE.get(`/MyAppointments/${userId}`)
            console.log(response)
        }catch(err:any){
            
        }
    }
}