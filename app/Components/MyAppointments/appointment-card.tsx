import { AppointmentProps } from "@/app/Types/Animals";
import { AiOutlineClockCircle } from "react-icons/ai";
import { CiCalendar, CiClock1 } from "react-icons/ci";
import { LiaHorseSolid } from "react-icons/lia";
import { MdCalendarToday } from "react-icons/md";

type AppointmentCardProps = {
  onDeleteAppointment?: (id_consulta: string) => void;
  appointment: AppointmentProps;
};

const AppointmentCard = ({
  appointment,
  onDeleteAppointment,
}: AppointmentCardProps) => {
  const { data_consulta, horario, nome_animal, id_consulta } = appointment;
  const date = new Date(data_consulta);
  const formatedDate = date.toLocaleDateString("pt-BR");

  return (
    <div className="w-full lg:w-[400px] h-[320px] pb-3 bg-zinc-50 flex flex-col items-center justify-center gap-4 shadow-lg shadow-azul-800 ring-azul-800 rounded-2xl">
      <div className="w-full h-auto py-3 px-4 bg-azul-900 rounded-tr-xl rounded-tl-xl">
        <h3 className="text-zinc-100 font-roboto font-medium">
          Sessão de equoterapia
        </h3>
      </div>
      <div className="w-full h-full flex flex-col gap-4">
        <div className="flex flex-col px-4">
          <span className="text-zinc-500 font-roboto font-medium text-sm flex items-center gap-1">
            <MdCalendarToday /> data
          </span>
          <p className="text-azul-900 font-semibold font-roboto text-lg">
            {formatedDate}
          </p>
        </div>
        <div className="flex flex-col px-4">
          <span className="text-zinc-500 font-roboto font-medium text-sm flex items-center gap-1">
            <AiOutlineClockCircle /> horario
          </span>
          <p className="text-azul-900 font-semibold font-roboto text-lg">
            {horario}
          </p>
        </div>
        <div className="flex flex-col px-4">
          <span className="text-zinc-500 font-roboto font-medium text-sm flex items-center gap-1">
            <LiaHorseSolid /> cavalo
          </span>
          <p className="text-azul-900 font-semibold font-roboto text-lg">
            {nome_animal}
          </p>
        </div>
      </div>
      <button
        onClick={() =>
          onDeleteAppointment ? onDeleteAppointment(id_consulta) : null
        }
        className="w-[90%] text-md font-roboto font-medium text-zinc-100 flex items-center justify-center py-2 bg-red-600/90 rounded-xl hover:bg-red-600 transition-all"
      >
        Cancelar Sessão
      </button>
    </div>
  );
};

export default AppointmentCard;
