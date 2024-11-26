"use client";

import { useForm } from "react-hook-form";
import TextInput from "../Input/text-input";
import { AiOutlineIdcard } from "react-icons/ai";
import {
  FaArrowRight,
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
import { API_ROUTE } from "@/app/Services/api";
import { toast } from "sonner";

const MOCKED_OPTIONS_DEFICIENCIA = [
  {
    label: "CID-10 (Q90) - Sindrome de Down",
    value: "autismo",
  },
  {
    label: "CID-11 (6A02) - Transtorno do Espectro do Autismo (TEA)",
    value: "sindrome_de_down",
  },
];

const MOCKED_OPTIONS_NIVEL_SUPORTE = [
  {
    label: "1",
    value: 1,
  },
  {
    label: "2",
    value: 2,
  },
  {
    label: "3",
    value: 3,
  },
];
const SignUpForm = () => {
  const router = useRouter();

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

  const { control, handleSubmit } = useForm<signUpUserData>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = async (userData: signUpUserData) => {
    try {
      const response = await API_ROUTE.post("/Register", userData);

      const { status, data } = response;

      if (status !== 201) {
        if (status === 200) {
          return toast.warning(data);
        }
        return toast.error(data);
      }

      toast.success(data);
      router.push("/SignIn");
    } catch (err) {
      console.error(err);
      return toast.error("Houve um erro!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full px-2 min-h-full flex flex-col lg:flex-row items-center lg:items-start gap-10"
    >
      <div className="w-full lg:w-[50%] flex flex-col items-center gap-5">
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
        <PasswordInput
          control={control}
          placeholder="Digite uma senha..."
          name="senha"
          hidePasswordIcon={<MdOutlineLock />}
          showPasswordIcon={<MdOutlineLockOpen />}
        />
      </div>
      <div className="w-full lg:w-[50%] flex flex-col items-center gap-5">
        <Select
          label="Classificação internacional de doenças"
          defaultValue="CID"
          control={control}
          name="deficiencia"
          options={MOCKED_OPTIONS_DEFICIENCIA}
        />

        <Select
          label="Nivel de suporte"
          control={control}
          defaultValue="Escolha seu nivel de suporte"
          name="nivel_suporte"
          options={MOCKED_OPTIONS_NIVEL_SUPORTE}
        />

        <button className="w-full mt-2 lg:mt-0 flex items-center justify-center gap-5 text-lg py-3 bg-azul-900 rounded-lg text-white font-roboto font-bold group hover:shadow-lg hover:shadow-azul-700 transition-all ease">
          Confirmar
          <FaArrowRight className="group-hover:translate-x-2 transition-all ease" />
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
