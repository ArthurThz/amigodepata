import Pets from "@/app/Components/Pets";

const AnimalAppointment = ({ params }: { params: { id: string } }) => {
  return (
    <div className="w-full h-screen">
      <Pets animalId={params.id} />
    </div>
  );
};

export default AnimalAppointment;
