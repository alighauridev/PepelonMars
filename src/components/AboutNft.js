import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/aboutnft.scss";
import { Parallax, Background } from "react-parallax";
// import img from "./layer2.png";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import Marquee from "react-easy-marquee";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaRedditAlien } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import { gsap } from "gsap";
import { TimelineLite, Power4 } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";
import img from "../assests/5.png"
gsap.registerPlugin(ScrollTrigger);
const AboutNft = () => {
  const btn = useRef(null);
  const p = useRef(null);
  const tll = new gsap.timeline();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);

  return (
    <>
      {/* <Marquee duration={10000} background="#7da936" height="100px">
        <h1 className="marque__heading">Release This Week Stay Tunned!</h1>
        <h1 className="marque__heading">Release This Week Stay Tunned!</h1>


      </Marquee> */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content one">
            <div className="about-img">
              <img
                src={img}
                alt=""
              />
            </div>
            <div className="about-h">

              <h2>Who is PepelonMars? </h2>

              <p> I have to be honest; Pepe isn't the attractive frog that everyone makes him out to be. For five years, we've been living in close quarters, sharing the same lily pads and insects. However, one day he decided to become the hottest meme in the crypto world. I gave him my blessing, but reminded him to come home at a decent hour.</p>

              <p>  You can imagine my shock when, just three days later, I heard that he was partying it up in Vegas with some lady, while I was busy cooking up his favorite dish of dragonflies. Pepe, you may have found success first, but I'm not one to back down. I won't let you forget about me that easily. Let's see who comes out on top in this game! </p>



              <div className="join-btn">
                <a href="https://t.me/PepelonmarsEth" target="_blank">
                  <div className="btn">
                    <div className="text">Join Now</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="about-content two">

            <div className="about-h">

              <h2>Who is PepelonMars? </h2>

              <p> I have to be honest; Pepe isn't the attractive frog that everyone makes him out to be. For five years, we've been living in close quarters, sharing the same lily pads and insects. However, one day he decided to become the hottest meme in the crypto world. I gave him my blessing, but reminded him to come home at a decent hour.</p>

              <p>  You can imagine my shock when, just three days later, I heard that he was partying it up in Vegas with some lady, while I was busy cooking up his favorite dish of dragonflies. Pepe, you may have found success first, but I'm not one to back down. I won't let you forget about me that easily. Let's see who comes out on top in this game! </p>



              <div className="join-btn">
                <a href="https://t.me/PepelonmarsEth" target="_blank">
                  <div className="btn">
                    <div className="text">Join Now</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="about-img">
              <img
                src={img}
                alt=""
              />
            </div>
          </div>

        </div>
      </section>
      <div style={{ position: "fixed" }} className="sidebtn">
        <div className="grid">
          <a href="https://discord.gg/royalsocietynft" target="_blank">
            <FaTelegramPlane />
          </a>
          <a href="https://discord.gg/royalsocietynft" target="_blank">
            <FaRedditAlien />
          </a>
          <a href="https://discord.gg/royalsocietynft" target="_blank">
            <FaDiscord />
          </a>
          <a href="https://discord.gg/royalsocietynft" target="_blank">
            <AiOutlineTwitter />
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutNft;
