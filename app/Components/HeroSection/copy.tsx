const Copy = () => {
  return (
    <div className="w-full h-auto px-4 flex items-center flex-col gap-6 lg:max-w-[50%] lg:h-full lg:w-auto lg:px-0 lg:py-24 lg:gap-16 lg:mt-0">
      <h1 className="font-poetsenOne  px-1 text-4xl sm:text-4xl text-white leading-tight lg:px-0 lg:text-6xl">
        <span className="text-laranja-200">Transforme sua vida </span>com o
        apoio de um <span className="text-laranja-200">companheiro!</span>
      </h1>
      <p className="font-poppins italic text-xl lg:text-4xl text-white leading-normal lg:leading-relaxed">
        Conecte-se com{" "}
        <span className="underline">especialistas em terapia assistida</span>{" "}
        por animais perto de você!
      </p>
      <div className="w-full flex flex-col gap-10  mt-10 lg:flex-row lg:gap-0">
        <button
          className="w-full z-10 lg:max-w-[350px] px-10 py-3 mr-[50px] bg-laranja-200 text-azul-800 rounded-xl font-bold border-2 border-laranja-200 
        font-roboto text-lg shadow-xl shadow-azul-900 lg:w-auto hover:bg-azul-800 hover:text-laranja-200 hover:shadow-lg  transition-all ease"
        >
          Conheça a nossa historia
        </button>
        <button
          className="w-full z-10 lg:max-w-[300px] px-10 py-3 bg-laranja-200 text-azul-800 rounded-xl font-bold border-2 border-laranja-200 
        font-roboto text-lg shadow-xl shadow-azul-900 hover:bg-azul-800 hover:text-laranja-200 hover:shadow-lg  transition-all ease"
        >
          Acesse a plataforma
        </button>
      </div>
    </div>
  );
};

export default Copy;
