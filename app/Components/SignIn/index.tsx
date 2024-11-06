import { IoPaw } from "react-icons/io5";
import SignInForm from "../Forms/SignInForm";

const LoginContainer = () => {
  return (
    <div className="w-full min-h-screen h-full px-4 flex flex-col items-center bg-blob lg:bg-blob-lg lg:bg-cover ">
      <h2 className="font-poetsenOne text-center text-azul-800 text-5xl mt-20 mb-14">
        Seja bem vindo de volta!
      </h2>
      <p className="text-azul-700 font-roboto text-lg font-medium">
        Faça login para continuar
      </p>
      <div className="w-full h-auto py-6 flex flex-col items-center justify-center gap-4 lg:w-[500px]">
        <SignInForm />
      </div>
    </div>
  );
};

export default LoginContainer;
