import Pets from "@/app/Components/Pets";

const SupportAnimalPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="w-full h-screen">
      <Pets
        animalId={params.id}
        especialidade="suporte"
        pageTitle="Tem interesse em adotar um animal de suporte?"
      />
    </div>
  );
};

export default SupportAnimalPage;
