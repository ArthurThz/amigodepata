import { useEffect, useState } from "react";
import { API_ROUTE } from "../Services/api";
import { AppointmentProps } from "../Types/Animals";

type statusProps = "idle" | "isLoading" | "error" | "sucess"

export const useGetAppointment = ({userId} : {userId:string}) => {
    const [Appointments, setAppointments] = useState<AppointmentProps[]  >([]);
    const [status, setStatus] = useState<statusProps>("idle");
    
    
    
    const getAppointments = async() => {
        
        try {
            setStatus("isLoading")
            const response = await API_ROUTE.get(`/MyAppointments/${userId}`)
            
           
            setAppointments(response.data.content)
            
            
            setStatus("sucess")
        }catch(err:any){
            console.log(err)
            setStatus("error")
        }
    }

    const handleOnDeleteAppointment = async (id_consulta:string) =>{
        if(!Appointments) return
        setStatus("isLoading")
        try{
            await API_ROUTE.delete(`/Appointment/${id_consulta}`)

            setStatus("sucess")
        }catch(err:any) {
            console.error(err)
            setStatus("error")
        }

        const appointmentsArray = Appointments.filter((item) => item.id_consulta !== id_consulta)
        
        setAppointments(appointmentsArray)
    }
    useEffect(() => {
        if(!userId) return
        getAppointments()
    }, []);

    return{Appointments, status, handleOnDeleteAppointment}
}