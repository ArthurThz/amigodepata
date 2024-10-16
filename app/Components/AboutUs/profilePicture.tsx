import Image, { StaticImageData } from "next/image";

type ProfilePictureProps = {
  image: StaticImageData;
  nome: string;
};

const ProfilePicture = ({ image, nome }: ProfilePictureProps) => {
  return (
    <div className="min-w-[40%] w-full  h-full flex flex-col items-center justify-center lg:w-auto">
      <h3 className="font-poetsenOne text-md text-azul-800 mb-2 ">{nome}</h3>
      <div className=" w-[130px] h-[130px] lg:w-[210px] lg:h-[210px] flex flex-col items-center  gap-5 border-2 p-[2px] border-azul-900 rounded-full shadow-md shadow-azul-400 lg:border-4 lg:p-[4px]">
        <Image
          className="rounded-full w-[150px] h-full lg:w-full lg:h-full"
          src={image}
          width={1080}
          height={1080}
          alt={`${image} picture`}
        />
      </div>
    </div>
  );
};

export default ProfilePicture;
