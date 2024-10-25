import Copy from "./copy";
import ImageContainer from "./imageContainer";

const HeroSection = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center pt-10 bg-gradient-to-br from-azul-500 to-azul-950 lg:flex-row lg:pt-[110px] lg:px-[160px] lg:justify-start">
      <Copy />
      <ImageContainer />
    </div>
  );
};

export default HeroSection;
