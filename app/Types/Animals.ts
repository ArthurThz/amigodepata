export type AnimalProps = {
    codanimal:     string;
    nome:          string;
    tipoanimal:    string;
    raca:          string;
    especialidade: string;
    idade:         number;
    imagem:        string;
}

export type AnimalDataProps = {
    content:AnimalProps[]
}

export type AppointmentProps = {
    id_consulta:string;
    cpf_usuario:string;
    data_consulta:Date;
    deficiencia:string;
    horario:string;
    id_animal:string;
    nivel_suporte:string;
    nome_animal:string;
    nome_usuario:string;

}

export type AppointmentDataProps = {
    content:AppointmentProps[]
}