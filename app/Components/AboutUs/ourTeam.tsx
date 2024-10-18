import ArthurProfilePicutre from "../../public/arthur-profile-picture.jpeg";
import JujuProfilePicutre from "../../public/juju-profile-picture.jpeg";
import FinoProfilePicture from "../../public/fino-profile-picture.jpeg";
import LuigiProfilePicutre from "../../public/luigi-profile-picture.jpeg";
import GuilhermeProfilePicutre from "../../public/guilherme-profile-picture.jpeg";
import RafaProfilePicutre from "../../public/rafa-profile-picture.jpg";
import ProfilePicture from "./profilePicture";

const OurTeam = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center px-10 py-16 gap-10 bg-azul-50 lg:justify-center">
      <h1 className="font-poetsenOne text-3xl text-azul-800 lg:text-6xl">
        Quem Somos?
      </h1>
      <h2 className="font-poetsenOne text-azul-800">
        Somos um grupo de estudantes de Sistemas de Informação que, durante a
        proposta de um trabalho nos solidarizamos com as pessoas que possuem
        algum tipo de deficiência.
      </h2>
      <h2 className="font-poetsenOne text-azul-800">
        Durante uma pesquisa, notamos que os animais podem fornecer uma melhora
        significativa para estas pessoas.Portanto, decidimos unir os dois e
        tentar proporcionar uma vida melhor para as duas partes.
      </h2>
      <div className="w-full lg:w-[50%] h-auto grid grid-rows-4 grid-cols-2 place-items-center  gap-12 lg:auto-rows-auto lg:grid-cols-3">
        <ProfilePicture image={JujuProfilePicutre} nome="Julia Neves" />
        <ProfilePicture image={ArthurProfilePicutre} nome="Arthur Theodoro" />
        <ProfilePicture image={FinoProfilePicture} nome="Raphael Clivatti" />
        <ProfilePicture image={RafaProfilePicutre} nome="Rafaella Seivane" />
        <ProfilePicture image={LuigiProfilePicutre} nome="Luigi Boscariol" />
        <ProfilePicture
          image={GuilhermeProfilePicutre}
          nome="Guilherme Gomes"
        />
        <ProfilePicture
          image={GuilhermeProfilePicutre}
          nome="Guilherme Gomes"
        />
      </div>
    </div>
  );
};

export default OurTeam;
