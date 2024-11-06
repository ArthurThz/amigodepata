"use client";

import { ComponentProps, ReactNode, useState } from "react";
import { Control, useController } from "react-hook-form";

type PasswordInputProps = ComponentProps<"input"> & {
  control: Control<any>;
  name: string;
  showPasswordIcon: ReactNode;
  hidePasswordIcon: ReactNode;
};

const PasswordInput = ({
  hidePasswordIcon,
  showPasswordIcon,
  control,
  name,
  ...inputProps
}: PasswordInputProps) => {
  const {
    formState: { errors },
  } = useController({ control, name });
  const defaultPasswordType = {
    type: "password",
    icon: hidePasswordIcon,
  };
  const [isPasswordVisible, setIsPasswordVisible] =
    useState(defaultPasswordType);

  const changePasswordVisibility = () => {
    isPasswordVisible.type === "password"
      ? setIsPasswordVisible({
          type: "text",
          icon: showPasswordIcon,
        })
      : setIsPasswordVisible(defaultPasswordType);
  };
  return (
    <div className="w-full flex flex-col items-center h-auto relative">
      <input
        className="w-full py-3 px-4 
          font-roboto font-bold text-lg text-azul-900
          shadow-md shadow-azul-900/50 bg-azul-50 
          rounded-lg outline-none
          placeholder:font-normal  placeholder:text-azul-900
          focus-within:ring-2 focus-within:ring-azul-900"
        type={isPasswordVisible.type}
        {...control.register(name)}
        {...inputProps}
        autoComplete="false"
      />

      <div
        className="h-full w-auto flex items-center justify-center absolute right-5 text-azul-900 hover:cursor-pointer"
        onClick={() => changePasswordVisibility()}
      >
        {isPasswordVisible.icon}
      </div>
      {errors[name] && (
        <span className="text-red-500 font-bold mt-2">
          {errors[name].message?.toString()}
        </span>
      )}
    </div>
  );
};

export default PasswordInput;
