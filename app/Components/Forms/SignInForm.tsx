"use client";

import { FaArrowRight, FaLock, FaLockOpen, FaUser } from "react-icons/fa";
import TextInput from "../Input/text-input";
import { useForm } from "react-hook-form";
import Link from "next/link";
import PasswordInput from "../Input/password-input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { API_ROUTE } from "@/app/Services/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const loginFormSchema = z.object({
    email: z
      .string({ required_error: "Por favor preencha o email!" })
      .email({ message: "Este email é inválido" }),

    senha: z.string({ required_error: "Por favor preencha a senha" }).min(5, {
      message: "Sua senha precisa ter ao menos 5 caracteres!",
    }),
  });

  type loginUserData = z.infer<typeof loginFormSchema>;

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<loginUserData>({
    resolver: zodResolver(loginFormSchema),
  });

  const router = useRouter();

  const onSubmit = async (userData: loginUserData) => {
    try {
      await API_ROUTE.post("/Login", userData);

      toast.success("Seja bem vindo! 🖐");
      router.push("/");
    } catch (err: any) {
      if (err.status !== 400) {
        console.log(err);
        toast.error("Algo deu errado, tente novamente!");
      }
      toast.error(err.response.data);
    }
  };

  return (
    <form
      className="w-[85%] px-2 flex flex-col items-center gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextInput
        name="email"
        placeholder="Usuário"
        icon={<FaUser />}
        control={control}
      />

      <PasswordInput
        control={control}
        name="senha"
        hidePasswordIcon={<FaLock />}
        showPasswordIcon={<FaLockOpen />}
        placeholder="Senha"
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
      <button className="w-full flex items-center justify-center gap-5 text-lg py-3 bg-azul-900 rounded-lg text-white font-roboto font-bold group hover:shadow-lg hover:shadow-azul-700 transition-all ease">
        Entrar
        <FaArrowRight className="group-hover:translate-x-2 transition-all ease" />
      </button>
    </form>
  );
};

export default SignInForm;
