"use client";

import { FaArrowRight, FaLock, FaUser } from "react-icons/fa";
import TextInput from "../Input/text-input";
import { useForm } from "react-hook-form";
import Link from "next/link";

const SignInForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async () => {
    console.log("teste");
  };
  return (
    <form
      className="w-[85%] px-2 flex flex-col items-center gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextInput
        name="user"
        placeholder="Usuário"
        icon={<FaUser />}
        control={control}
      />
      <TextInput
        name="password"
        placeholder="Senha"
        icon={<FaLock />}
        // FaLockOpen
        control={control}
      />
      <span className="font-roboto font-medium text-azul-900 group">
        Ainda não tem uma conta?{" "}
        <Link
          href="/"
          className="underline-offset-2 underline font-bold group-hover:text-laranja-700 transition-all ease"
        >
          Crie uma agora mesmo
        </Link>
      </span>
      <button className="w-full flex items-center justify-center gap-5 text-lg py-3 bg-azul-900 rounded-lg text-white font-roboto font-bold group hover:shadow-lg hover:shadow-azul-500 transition-all ease">
        Entrar
        <FaArrowRight className="group-hover:translate-x-2 transition-all ease" />
      </button>
    </form>
  );
};

export default SignInForm;
