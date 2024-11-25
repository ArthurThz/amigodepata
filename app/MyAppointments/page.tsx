"use client";

import { useAppSelector } from "@/redux/store/store";
import AppoitmentsContainer from "../Components/MyAppointments";
import { useGetAppointment } from "../Hooks/useGetAppointments";
import Loader from "../Components/Loader";

const MyAppointments = () => {
  const { uuid } = useAppSelector((state) => state.userAuth);
  const { Appointments, status, handleOnDeleteAppointment } = useGetAppointment(
    {
      userId: uuid,
    }
  );
  if (status === "isLoading") return <Loader />;

  return (
    <div className="w-full h-full min-h-screen">
      <AppoitmentsContainer
        appointments={Appointments}
        onDeleteAppointment={handleOnDeleteAppointment}
      />
    </div>
  );
};

export default MyAppointments;
