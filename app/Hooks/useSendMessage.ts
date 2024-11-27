import { useState } from "react";
import { sendWppMessage } from "../utils/send-wpp-message"
import { toast } from "sonner";
import { API_ROUTE } from "../Services/api";
type sendMessageProps = {
    type: string;
    userId:string
    animal:string
}


export const useSendMessage = async ({type,animal,userId}: sendMessageProps) =>{
    if(!userId) return

    try {
        const getUserData = await API_ROUTE.get(`/GetUserData/${userId}`)
        if(getUserData.data.length === 0) {
            return toast.error("Não foi possivel buscar os dados do usuário!")
        }

        const {nome, telefone, deficiencia, nivel_suporte, cpf} = getUserData.data.content[0]
        const mensagemEquoterapia = 
    `Olá, temos uma nova solicitação para o serviço de equoterapia, aqui estão os dados da pessoa interessada!
    -nome: *${nome}*
    -CPF: *${cpf}*
    -Telefone: *${telefone}*
    -CID: *${deficiencia}*
    -Nivel de suporte: *${nivel_suporte}*
    -Animal: *${animal}*
    
    `
    const mensagemSuporteEmocional = 
    `Olá, temos uma nova solicitação para a adoção de animais, aqui estão os dados da pessoa interessada!
    -nome: *${nome}*
    -CPF: *${cpf}*
    -Telefone: *${telefone}*
    -CID: *${deficiencia}*
    -Nivel de suporte: *${nivel_suporte}*
    -Animal: *${animal}*
    
    `
    const mensagemFinal = type === "equoterapia" ? mensagemEquoterapia : mensagemSuporteEmocional

   

    sendWppMessage({message:mensagemFinal})
    toast.success("Mensagem Enviada! Aguarde o contato da ong responsável")

    }catch(err:any) {
        console.error(err)
        return toast.error("algo deu errado, tente novamente!")
    }

    
}