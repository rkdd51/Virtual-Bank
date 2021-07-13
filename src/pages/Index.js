import React, { useState } from "react";
import HeroSect from "../component/HeroSection";
import InfoSection from "../component/IntroSection/Index";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from "../component/IntroSection/Data ";
import NavBar from "../component/Navbar/Index";
import Sidebar from "../component/Sidebar/index";
import Services from "../component/Services/Index";
import Footer from "../component/Footer/Index";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSect />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
}

export default Home;
