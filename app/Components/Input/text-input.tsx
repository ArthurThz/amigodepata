import { ComponentProps, ReactNode } from "react";
import { Control, useController } from "react-hook-form";
import { FaUser } from "react-icons/fa";

type TextInputProps = ComponentProps<"input"> & {
  control: Control<any>;
  icon?: ReactNode;
  name: string;
};

const TextInput = ({ control, name, icon, ...inputProps }: TextInputProps) => {
  const {
    formState: { errors },
  } = useController({ control, name });
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex  items-center h-auto relative">
        <input
          className="w-full py-3 px-4 
          font-roboto font-bold text-lg text-azul-900
          shadow-md shadow-azul-900/50 bg-azul-50 
          rounded-lg outline-none
          placeholder:font-normal  placeholder:text-azul-900
          focus-within:ring-2 focus-within:ring-azul-900"
          placeholder={name}
          {...control.register(name, {
            required: "Por favor preencha o campo de usuário!",
          })}
          {...inputProps}
        />
        <div className="w-auto h-auto flex items-center justify-center absolute right-5 text-azul-900">
          {icon}
        </div>
      </div>
      {/* Hook Form error handler */}
      {errors[name] && (
        <span className="text-red-500 font-bold mt-2">
          {errors[name].message?.toString()}
        </span>
      )}
    </div>
  );
};

export default TextInput;
