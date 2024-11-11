import { ComponentProps } from "react";
import { Control, useController, useForm } from "react-hook-form";

type selectProps = ComponentProps<"select"> & {
  control: Control<any>;
  name: string;
  options: string[];
};

const Select = ({
  control,
  name,
  defaultValue,
  options,
  ...rest
}: selectProps) => {
  const {
    formState: { errors },
  } = useController({ control, name });

  return (
    <div className="w-full flex flex-col items-center h-auto">
      <select
        className="w-full py-3 px-4 
          font-roboto  text-lg text-azul-900
          shadow-md shadow-azul-900/50 bg-azul-50 
          rounded-lg outline-none
          placeholder:font-normal  placeholder:text-azul-900
          focus-within:ring-2 focus-within:ring-azul-900"
        {...control.register(name)}
        {...rest}
      >
        <option value="">Escolha uma opção</option>
        {options.map((item, index) => {
          return (
            <option key={`${index}`} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      {errors[name] && (
        <span className="text-red-500 font-bold mt-2">
          {errors[name].message?.toString()}
        </span>
      )}
    </div>
  );
};

export default Select;
