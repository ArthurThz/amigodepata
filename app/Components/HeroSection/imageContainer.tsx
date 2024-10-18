import Image from "next/image";

import Cavalo from "../../public/horseHeroSection.png";

const ImageContainer = () => {
  return (
    <div className="w-[50%] h-auto flex items-end justify-end absolute right-0 bottom-0 ring-2">
      <Image
        className="w-[70%]"
        src={Cavalo}
        width={400}
        height={400}
        alt="imagem de um cavalo"
      />
    </div>
  );
};

export default ImageContainer;
