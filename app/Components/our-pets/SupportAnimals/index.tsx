import CardContainer from "../Card/cardsContainer";

const SupportAnimals = () => {
  const animais = [
    {
      nome: "Buddy",
      idade: 5,
      raca: "Golden Retriever",
      imagem:
        "https://cavalus.com.br/wp-content/uploads/2018/11/BH-Historoa-4.jpg",
    },
    {
      nome: "Luna",
      idade: 3,
      raca: "Persa",
      imagem:
        "https://cavalus.com.br/wp-content/uploads/2018/11/BH-Historoa-4.jpg",
    },
    {
      nome: "Max",
      idade: 6,
      raca: "Labrador Retriever",
      imagem:
        "https://cavalus.com.br/wp-content/uploads/2018/11/BH-Historoa-4.jpg",
    },
    {
      nome: "Mimi",
      idade: 4,
      raca: "Siamês",
      imagem:
        "https://cavalus.com.br/wp-content/uploads/2018/11/BH-Historoa-4.jpg",
    },
    {
      nome: "Charlie",
      idade: 2,
      raca: "Bulldog Francês",
      imagem:
        "https://cavalus.com.br/wp-content/uploads/2018/11/BH-Historoa-4.jpg",
    },
    {
      nome: "Bella",
      idade: 3,
      raca: "Maine Coon",
      imagem:
        "https://cavalus.com.br/wp-content/uploads/2018/11/BH-Historoa-4.jpg",
    },
    {
      nome: "Rocky",
      idade: 4,
      raca: "Pug",
      imagem:
        "https://cavalus.com.br/wp-content/uploads/2018/11/BH-Historoa-4.jpg",
    },
  ];
  return (
    <div className="w-full py-10 h-auto bg-azul-200 flex flex-col items-center gap-16 lg:py-20">
      <h1 className="font-poetsenOne text-azul-900 text-2xl text-center px-4 lg:px-0 lg:text-5xl lg:text-start lg:mb-10">
        Amigos de pata prontos para te dar apoio
      </h1>
      <CardContainer
        data={animais}
        CardButtonClass="bg-azul-900 text-white border-azul-900 hover:text-azul-900 hover:border-azul-900"
        CardClass="bg-white border-white text-azul-900 shadow-azul-900 hover:border-azul-900 hover:shadow-azul-900"
      />
    </div>
  );
};

export default SupportAnimals;
