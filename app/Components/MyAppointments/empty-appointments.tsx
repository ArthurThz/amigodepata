import Link from "next/link";

const EmptyAppointments = () => {
  return (
    <div className="w-full h-full flex flex-col items-center gap-2">
      <h1 className="text-2xl font-roboto font-bold text-azul-900">
        Você não tem nenhuma sessão de equoterapia marcada!
      </h1>
      <span>
        <Link href="/OurPets" className="underline-offset-2">
          Clique aqui
        </Link>{" "}
        para solicitar uma sessão!
      </span>
    </div>
  );
};

export default EmptyAppointments;
