import { ComponentProps } from "react";
import { Control, useController, useForm } from "react-hook-form";

type selectProps = ComponentProps<"select"> & {
  control: Control<any>;
  label: string;
  name: string;
  options: {
    label: string;
    value: string | number;
  }[];
};

const Select = ({ control, name, label, options, ...rest }: selectProps) => {
  const {
    formState: { errors },
  } = useController({ control, name });

  return (
    <div className="w-full flex flex-col  h-auto">
      <label htmlFor={name} className="text-md text-azul-900 font-medium mb-2">
        {label}
      </label>

      <select
        className="w-full py-3 px-4 
        text-sm
          
          font-roboto text-azul-900
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
            <option key={`${index}`} value={item.value}>
              {item.label}
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
