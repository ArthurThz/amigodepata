import Copy from "./copy";
import ImageContainer from "./imageContainer";

const HeroSection = () => {
  return (
    <div className="w-full h-screen pt-[110px] px-[160px] flex items-center   bg-gradient-to-br from-azul-500 to-azul-950">
      <Copy />
      <ImageContainer />
    </div>
  );
};

export default HeroSection;
