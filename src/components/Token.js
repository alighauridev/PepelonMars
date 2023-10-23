import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/token.scss";
import { FaCheckCircle } from "react-icons/fa";
import img1 from "../assests/PepeWife.io/Pepewife.io.webp";
import { Parallax, Background } from "react-parallax";
import { gsap } from "gsap";
import { TimelineLite, Power3 } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
// const data = [2, 15, 3, 10, 12, 8, 4, 40];
const data = [
  {
    name: "Marketing and Advertising: 10%",
    percent: 10,
  },
  {
    name: "Development: 3%",
    percent: 3,
  },
  {
    name: "Partnerships: 15%",
    percent: 15,
  },
  {
    name: "Liquidity: 2%",
    percent: 2,
  },
];

const data2 = [
  {
    name: "Accounting & Legal: 12%",
    percent: 12,
  },
  {
    name: "SMM Community Leaders: 8%",
    percent: 8,
  },
  {
    name: "Audits: 10%",
    percent: 10,
  },
  {
    name: "Distribution: 40%",
    percent: 40,
  },
];
const list = [
  "Token name: PumpKingPepe",
  "Ticker name: $PEPEWIFE",
  "Total supply: 420,690,000,000,000 (420,690B)",
  "CHAIN: ETH (ETHEREUM)",
  "Distribution: 90% circulating (LP burned) / 10% CEX RESERVE",
  "0% TAX – OWNERSHIP RENOUNCED – LP BURNED",
]
const Token = ({ ease }) => {
  const ite = useRef(null);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    gsap.from(".wid", 2, {
      width: 0,
      scrollTrigger: {
        trigger: ".itemll",
        start: "top 110%",
        end: "bottom 200% ",
        toggleActions: "restart complete reverse reset",
      },
    });
    gsap.to(".mid-", 3, {
      scale: 1,
      ease: ease,
      scrollTrigger: {
        trigger: ".itemll",
        start: "top 110%",
        end: "bottom 200% ",
        toggleActions: "restart complete reverse reset",
      },
    });
  }, []);
  return (
    // <Parallax
    //   blur={{ min: -15, max: 15 }}
    //   bgImage={img}
    //   bgImageAlt="the dog"
    //   strength={400}
    //   bgClassName={"roll"}
    // >

    // </Parallax>
    <section className="token" id="tokenomics">
      <div className="container">
        <div className="heading" data-aos="zoom-out" data-aos-easing="ease-out">
          <h2>Tokenomics</h2>

        </div>
        <div className="grid">
          <div className="start" ref={ite}>
            <h3>Token Supply: 420,690,000,000,000</h3>
            <ul>

              {
                list.map((item, index) => {
                  return (
                    <li>{item}</li>
                  )
                })
              }
            </ul>
          </div>
          <div className="end">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Token;
