import ProfilePicture from "./profilePicture";

const OurTeam = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center px-10 py-16 gap-10 lg:gap-14 bg-azul-50 lg:justify-center">
      <h1 className="font-poetsenOne text-3xl text-azul-800 lg:text-6xl">
        Quem Somos?
      </h1>
      <h2 className="font-poetsenOne text-azul-800 lg:w-[40%] lg:text-xl">
        Somos um grupo de estudantes de Sistemas de Informação que, durante a
        proposta de um trabalho nos solidarizamos com as pessoas que possuem
        algum tipo de deficiência.
      </h2>
      <h2 className="font-poetsenOne text-azul-800 lg:w-[40%] lg:text-xl">
        Durante uma pesquisa, notamos que os animais podem fornecer uma melhora
        significativa para estas pessoas.Portanto, decidimos unir os dois e
        tentar proporcionar uma vida melhor para as duas partes.
      </h2>
      <div className="w-full lg:w-[50%] h-auto grid grid-rows-4 grid-cols-2 place-items-center  gap-12 lg:auto-rows-auto lg:grid-cols-3">
        <ProfilePicture image="/juju-profile-picture.jpeg" nome="Julia Neves" />
        <ProfilePicture
          image="/arthur-profile-picture.jpeg"
          nome="Arthur Theodoro"
        />
        <ProfilePicture
          image="/fino-profile-picture.jpeg"
          nome="Raphael Clivatti"
        />
        <ProfilePicture
          image="/rafa-profile-picture.jpg"
          nome="Rafaella Seivane"
        />
        <ProfilePicture
          image="/luigi-profile-picture.jpeg"
          nome="Luigi Boscariol"
        />
        <ProfilePicture
          image="/guilherme-profile-picture.jpeg"
          nome="Guilherme Gomes"
        />
        <ProfilePicture
          image="/danielle-profile-pic.jpg"
          nome="Danielle Márcia"
        />
      </div>
    </div>
  );
};

export default OurTeam;
