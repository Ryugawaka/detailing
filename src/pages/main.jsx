import React from "react";
import ServicesBlock from "../sections/main/services";
import DescriptionBlock from "../sections/main/description";
import HeroBlock from "../sections/main/heroBlock";

const MainPage = () => {
  return (
    <main>
      <HeroBlock />
      <ServicesBlock />
      <DescriptionBlock />
    </main>
  );
};
export default MainPage;
