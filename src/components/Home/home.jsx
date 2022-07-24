import { Icon } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Navbar";
import Cards from "./Cards";
import Htop from "./Htop";
import SlidingImages from "./Slides/SlidingImages";

const Header = () => {
  return (
    <div>
      <Navbar />

      <div>
        <SlidingImages />

        <Cards />

        <Htop />

        <Icon />
      </div>
      <div>
        <img
          style={{
            height: "700px",
            width: "100%",
            marginTop: "-5px",
          }}
          src="01.png"
          alt="fruit"
        />
      </div>
    </div>
  );
};

export default Header;
