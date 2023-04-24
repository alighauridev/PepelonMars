import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/banner.scss";
import Marquee from "react-fast-marquee";
import Navigation from "./Navigation";
import { BannerImages } from "../assests/data";
import { gsap } from "gsap";
import { TimelineLite, Power4 } from "gsap/gsap-core";
import img1 from "../assests/3.png"
import icons from "../assests/images/icons.png"
import { toast } from "react-toastify";
const Banner = ({ timeline, ease }) => {
  const contractAddressRef = useRef(null);

  const handleCopy = () => {
    const contractAddress = contractAddressRef.current.textContent.trim();
    navigator.clipboard.writeText(contractAddress);
    toast.success("Contract address copied!");
  };
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <Navigation timeline={timeline} ease={ease} />
      <section className="banner">
        <div className="container">
          <div className="banner-h">
            <div className="banner-main-h">
              <h2>PepelonMars </h2>

            </div>


            <div className="banner-btn">
              <div className="btn-main">
                <a target="_blank" href="https://app.uniswap.org/#/swap?outputCurrency=0x6643ED3bd5ffe7a3F9d3DD36F71a843abfA9DF87">
                  <div>BUY ON NOW </div>
                </a>
              </div>
              <div className="btn-main">
                <a target="_blank" href="https://www.dextools.io/app/en/ether/pair-explorer/0x6643ED3bd5ffe7a3F9d3DD36F71a843abfA9DF87">
                  <div>CHART </div>
                </a>
              </div>

            </div>
            <div className="contract">
              <span ref={contractAddressRef}>
                0x6643ED3bd5ffe7a3F9d3DD36F71a843abfA9DF87
              </span>
              <button onClick={handleCopy}>COPY</button>
            </div>
          </div>

          <div className="banner-img">
            <img src={img1} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
