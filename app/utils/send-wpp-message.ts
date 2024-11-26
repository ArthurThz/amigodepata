import gzappy from 'gzappy-js'


type sendWppMessageProps = {
    message?:string;
    phoneNumber?:string;
}

export const sendWppMessage = async ({message, phoneNumber}: sendWppMessageProps) =>{
    console.log(message)
    // Definição das variáveis de ambiente
    const GZAPPY_API_TOKEN = process.env.NEXT_PUBLIC_GZAPPY_API_TOKEN;
    const GZAPPY_INSTANCE_ID = process.env.NEXT_PUBLIC_GZAPPY_INSTANCE_ID;
    
    // Criação de uma instância do gzappy client
    const gClient = new gzappy({
      token: GZAPPY_API_TOKEN,
      instanceId: GZAPPY_INSTANCE_ID,
    });
    
    // Enviando mensagens
    const messages = [
     `${message}`
    ];
    const phones = ["5511954805269"];
    

    await gClient
      .sendMessage(messages, phones)
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
      
}