import { sendWppMessage } from "../utils/send-wpp-message"
type sendMessageProps = {
    type: string;
    userId:string
}

export const useSendMessage = ({type,userId}: sendMessageProps) =>{
    console.log(type)
    if(!userId) return
    
    const mensagemEquoterapia = `
    Olá, temos uma nova solicitação para o serviço de equoterapia, aqui estão os dados da pessoa interessada!
    -nome:*Arthur Theodoro*
    -CPF:*12345678910*
    -CID:*Transtorno do espectro autista*
    -Nivel de suporte:*1*
    -Animal:*Apollo*
    
    `
    const mensagemSuporteEmocional = ""
    const mensagemFinal = type === "equoterapia" ? mensagemEquoterapia : mensagemSuporteEmocional

    sendWppMessage({message:mensagemFinal})
}