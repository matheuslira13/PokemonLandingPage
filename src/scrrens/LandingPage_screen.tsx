import { useLandingPage } from "../hooks/useLandingPage";
import { LandingPageTemplate } from "../templates/LandingPage";

export const LandingPageScreen = () => {
  const {
    getFilter,
    pokeData,
    pokemonType,
    setFindInList,
    buttonState,
    email,
    isDisabled,
    openModal,
    setEmail,
    setOpenModal,
    setUserName,
    userName,
  } = useLandingPage();
  return (
    <LandingPageTemplate
      getFilter={getFilter}
      pokeData={pokeData}
      pokemonType={pokemonType}
      setFindInList={setFindInList}
      buttonState={buttonState}
      email={email}
      isDisabled={isDisabled}
      openModal={openModal}
      setEmail={setEmail}
      setOpenModal={setOpenModal}
      setUserName={setUserName}
      userName={userName}
    />
  );
};
