import Link from "next/link";

const EmptyAppointments = () => {
  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center gap-4 justify-center">
      <h1 className="text-4xl font-roboto font-bold text-azul-900">
        Você não tem nenhuma sessão de equoterapia marcada!
      </h1>
      <span className="text-xl">
        <Link
          href="/OurPets"
          className="underline-offset-2 text-azul-900 font-roboto font-bold"
        >
          Clique aqui
        </Link>{" "}
        para solicitar uma sessão!
      </span>
    </div>
  );
};

export default EmptyAppointments;
