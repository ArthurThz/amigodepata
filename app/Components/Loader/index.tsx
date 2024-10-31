import Image, { StaticImageData } from "next/image";
import { FaSpinner } from "react-icons/fa";

type LoaderProps = {
  image?: StaticImageData | string;
};

const Loader = ({ image }: LoaderProps) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      {!image ? (
        <FaSpinner className="text-2xl text-azul-900 animate-spin" />
      ) : (
        <Image src={image} width={300} height={300} alt="loader icon" />
      )}
    </div>
  );
};

export default Loader;
