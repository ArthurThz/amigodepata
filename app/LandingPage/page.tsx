import OurTeam from "../Components/AboutUs/ourTeam";
import HeroSection from "../Components/HeroSection";
import Horses from "../Components/MeetOutPets/Horses";
import Pets from "../Components/MeetOutPets/Pets";
import OurSercives from "../Components/OurServices";

const LandingPage = () => {
  return (
    <div className="w-full flex flex-col gap-[50px] lg:gap-[90px] h-auto">
      <HeroSection />
      <OurSercives />
      <Horses />
      <Pets />
      <OurTeam />
    </div>
  );
};

export default LandingPage;
