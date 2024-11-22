import Pets from "@/app/Components/Pets";

const HorsePage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="w-full h-screen">
      <Pets
        animalId={params.id}
        especialidade="equoterapia"
        pageTitle="Tem interesse em marcar uma sessão de equoterapia?"
      />
    </div>
  );
};

export default HorsePage;
