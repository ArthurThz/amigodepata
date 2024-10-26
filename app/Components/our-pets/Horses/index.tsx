import AnimalCard from "../Card";
import CardContainer from "../Card/cardsContainer";

const Horses = () => {
  const cavalos = [
    {
      nome: "Estrela",
      idade: 10,
      raca: "Puro Sangue Lusitano",
      imagem:
        "https://cavalus.com.br/wp-content/uploads/2018/11/BH-Historoa-4.jpg",
    },
    {
      nome: "Apollo",
      idade: 8,
      raca: "Quarto de Milha",
      imagem:
        "https://cavalus.com.br/wp-content/uploads/2018/11/BH-Historoa-4.jpg",
    },
    {
      nome: "Bela",
      idade: 12,
      raca: "Andaluz",
      imagem:
        "https://cavalus.com.br/wp-content/uploads/2018/11/BH-Historoa-4.jpg",
    },
    {
      nome: "Ventania",
      idade: 7,
      raca: "Mangalarga Marchador",
      imagem:
        "https://cavalus.com.br/wp-content/uploads/2018/11/BH-Historoa-4.jpg",
    },
  ];

  return (
    <div className="w-full py-10 h-auto bg-laranja-200 flex flex-col items-center gap-16 lg:py-20">
      <h1 className="font-poetsenOne text-azul-900 text-2xl text-center lg:text-start lg:text-5xl lg:mb-10">
        Terapeutas de quatro patas
      </h1>
      <CardContainer data={cavalos} />
    </div>
  );
};

export default Horses;
