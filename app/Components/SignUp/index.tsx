import SignUpForm from "../Forms/SignUpForm";

const SignUpContainer = () => {
  return (
    <div className="w-full min-h-screen h-full px-4 flex flex-col items-center bg-blob lg:bg-blob-lg lg:bg-cover ">
      <h2 className="font-poetsenOne text-center text-azul-800 text-5xl mt-20 mb-14">
        Seja bem vindo!
      </h2>
      <div className="w-full h-auto py-6 flex flex-col items-center justify-center gap-4 lg:w-[500px] ring-2 ring-azul-900/60 shadow-lg shadow-azul-800 px-10  rounded-md">
        <p className="text-azul-700 font-roboto text-lg font-medium">
          Faça seu cadastro agora mesmo!
        </p>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpContainer;
