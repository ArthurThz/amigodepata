import { GiSittingDog } from "react-icons/gi";

const ErrorMessage = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center gap-5 ">
      <div className="flex items-center justify-center w-[40%] gap-5">
        <GiSittingDog className="text-[500px]" />

        <h1 className="text-[50px] font-poetsenOne text-red-600">
          Parece que algo deu errado, tente novamente mais tarde!
        </h1>
      </div>
    </div>
  );
};

export default ErrorMessage;
