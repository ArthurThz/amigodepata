import HeroSection from "../Components/HeroSection";
import OurSercives from "../Components/ourServices";

const LandingPage = () => {
  return (
    <div className="w-full flex flex-col gap-[50px] lg:gap-[90px] h-auto">
      <HeroSection />
      <OurSercives />
    </div>
  );
};

export default LandingPage;
