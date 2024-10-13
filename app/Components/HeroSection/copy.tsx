const Copy = () => {
  return (
    <div className="max-w-[50%] w-auto  h-full py-24 flex flex-col gap-6">
      <h1 className="font-poetsenOne text-5xl text-white leading-tight">
        <span className="text-laranja-200">Transforme sua vida</span> com o
        apoio de um <span className="text-laranja-200">companheiro!</span>
      </h1>
      <p className="font-poppins italic text-3xl text-white leading-normal">
        Conecte-se com{" "}
        <span className="underline">especialistas em terapia assistida</span>{" "}
        por animais perto de você!
      </p>
      <div className="flex gap-6 mt-10">
        <button
          className="px-10 py-3 bg-laranja-200 text-azul-800 rounded-xl font-bold border-2 border-laranja-200 
        font-roboto text-lg shadow-xl shadow-azul-900 hover:bg-azul-800 hover:text-laranja-200 hover:shadow-lg  transition-all ease"
        >
          Conheça a nossa historia
        </button>
        <button
          className="px-10 py-3 bg-laranja-200 text-azul-800 rounded-xl font-bold border-2 border-laranja-200 
        font-roboto text-lg shadow-xl shadow-azul-900 hover:bg-azul-800 hover:text-laranja-200 hover:shadow-lg  transition-all ease"
        >
          Acesse a plataforma
        </button>
      </div>
    </div>
  );
};

export default Copy;
