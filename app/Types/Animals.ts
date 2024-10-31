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