"use client";

import { useAppSelector } from "@/redux/store/store";
import AppoitmentsContainer from "../Components/MyAppointments";
import { useGetAppointment } from "../Hooks/useGetAppointments";
import Loader from "../Components/Loader";

const MyAppointments = () => {
  const { uuid } = useAppSelector((state) => state.userAuth);
  const { Appointments, status, handleOnDeleteAppointment } = useGetAppointment(
    {
      userId: "c6b0ee59-51a1-4008-8221-5a5a8b43f77b",
    }
  );
  if (status === "isLoading") return <Loader />;
  return (
    <div className="w-full h-full">
      <AppoitmentsContainer
        appointments={Appointments}
        onDeleteAppointment={handleOnDeleteAppointment}
      />
    </div>
  );
};

export default MyAppointments;
