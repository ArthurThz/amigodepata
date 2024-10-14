import Image, { StaticImageData } from "next/image";

type OurServicesCardProps = {
  title: string;
  image: StaticImageData | string;
  description: string;
};

const OurServicesCard = ({
  title,
  image,
  description,
}: OurServicesCardProps) => {
  return (
    <div className="w-full px-5 h-auto rounded-md py-5 flex flex-col items-center gap-5 bg-azul-900 shadow-lg shadow-azul-700">
      <h2 className="font-roboto font-bold text-xl text-white">{title}</h2>
      <Image src={image} width={500} height={300} alt={`imagem ${title}`} />
      <p className="text-white font-roboto font-normal text-md">
        {description}
      </p>
    </div>
  );
};

export default OurServicesCard;
