"use client";

import { useForm } from "react-hook-form";
import TextInput from "../Input/text-input";
import { AiOutlineIdcard } from "react-icons/ai";
import {
  FaLock,
  FaLockOpen,
  FaRegUser,
  FaUser,
  FaWhatsapp,
} from "react-icons/fa";
import {
  MdOutlineEmail,
  MdOutlineLock,
  MdOutlineLockOpen,
} from "react-icons/md";
import PasswordInput from "../Input/password-input";
import Select from "../Select";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const optionsDeficiencia = ["Autismo", "Sindrome de down"];

const MOCKED_OPTIONS_NIVEL_SUPORTE = ["1", "2", "3"];
const SignUpForm = () => {
  const SignUpSchema = z.object({
    cpf: z
      .string({
        message: "Por favor digite apenas numeros!",
        required_error: "Por favor digite o seu CPF",
      })
      .length(11, {
        message: "O seu CPF precisa conter 11 caracteres",
      }),
    nome: z
      .string({ required_error: "Por favor digite o seu nome!" })
      .min(3, { message: "Por favor digite o seu nome!" }),
    email: z
      .string({ required_error: "Por favor digite o seu email" })
      .email({ message: "Email inválido!" }),
    telefone: z
      .string({ required_error: "Por favor digite o seu telefone" })
      .length(11, { message: "Numero de telefone Inválido!" }),
    deficiencia: z
      .string()
      .min(1, { message: "Selecione pelo menos 1 opção!" }),
    nivel_suporte: z
      .string()
      .min(1, { message: "Selecione pelo menos 1 opção!" }),
    senha: z
      .string()
      .min(11, { message: "Sua senha deve conter no minimo 11 caracteres" }),
  });

  type signUpUserData = z.infer<typeof SignUpSchema>;

  const { control, handleSubmit, register } = useForm<signUpUserData>({
    resolver: zodResolver(SignUpSchema),
  });

  const router = useRouter();

  const onSubmit = (userData: signUpUserData) => {
    console.log("Enviou o form...");
    console.log(userData);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[85%] px-2 flex flex-col items-center gap-5"
    >
      <TextInput
        control={control}
        icon={<AiOutlineIdcard />}
        name="cpf"
        placeholder="Digite o seu cpf..."
      />

      <TextInput
        control={control}
        icon={<FaRegUser />}
        name="nome"
        placeholder="Digite o seu nome..."
      />
      <TextInput
        control={control}
        icon={<MdOutlineEmail />}
        name="email"
        placeholder="Digite o seu email..."
      />

      <TextInput
        control={control}
        icon={<FaWhatsapp />}
        name="telefone"
        placeholder="Digite o seu telefone..."
      />

      <Select
        control={control}
        name="deficiencia"
        options={optionsDeficiencia}
      />

      <Select
        control={control}
        defaultValue="Escolha seu nivel de suporte"
        name="nivel_suporte"
        options={MOCKED_OPTIONS_NIVEL_SUPORTE}
      />

      <PasswordInput
        control={control}
        placeholder="Digite uma senha..."
        name="senha"
        hidePasswordIcon={<MdOutlineLock />}
        showPasswordIcon={<MdOutlineLockOpen />}
      />
      <button>Enviar</button>
    </form>
  );
};

export default SignUpForm;
