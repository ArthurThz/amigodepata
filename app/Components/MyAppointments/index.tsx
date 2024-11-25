"use client";

import EmptyAppointments from "@/app/Components/MyAppointments/empty-appointments";
import { AppointmentProps } from "@/app/Types/Animals";
import AppointmentCard from "./appointment-card";
type AppointmentContainerProps = {
  onDeleteAppointment?: (id_consulta: string) => void;
  appointments: AppointmentProps[];
};

const AppoitmentsContainer = ({
  appointments,
  onDeleteAppointment,
}: AppointmentContainerProps) => {
  if (appointments.length === 0) return <EmptyAppointments />;
  return (
    <div className="w-full min-h-screen h-full py-10 grid place-items-center">
      <div className="h-full grid grid-cols-2 gap-8">
        {appointments.map((appointment, index) => {
          return (
            <AppointmentCard
              appointment={appointment}
              onDeleteAppointment={() =>
                onDeleteAppointment
                  ? onDeleteAppointment(appointment.id_consulta)
                  : null
              }
              key={appointment.id_consulta}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AppoitmentsContainer;
