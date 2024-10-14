import HeroSection from "../Components/HeroSection";
import OurSercives from "../Components/ourServices";

const LandingPage = () => {
  return (
    <div className="w-full flex flex-col gap-[50px] h-auto">
      <HeroSection />
      <OurSercives />
    </div>
  );
};

export default LandingPage;
