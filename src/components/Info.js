import React from "react";
import "../scss/info.scss";
import { Parallax } from "react-parallax";
import img from "./info.jpg";
const Info = () => {
  return (
    <>
      <Parallax style={{overflow:"unset"}} blur={0} bgImage={img} bgImageAlt="the cat" strength={200}>
        <section className="info">
          <div className="container">
            <h2>What is SBC?</h2>
            <p>
            Shutter Bots Club is an unprecedented NFT project inspired by  experienced photographers ,filmmakers & digital artist. An educational and entertainment stream that pays the people who enjoys it.
            </p>
           
          </div>
        </section>
      </Parallax>
    </>
  );
};

export default Info;
