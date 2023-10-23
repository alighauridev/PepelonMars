import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { nav } from "../assests/data";
import "../scss/navigation.scss";
import { FaDiscord } from "react-icons/fa";
// import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineSearch, AiOutlineTwitter } from "react-icons/ai";
import { BsChevronUp } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
// import { FaRedditAlien } from "react-icons/fa";
import { HiOutlineBars3 } from "react-icons/hi2";
import img1 from "../assests/3.png"
const Navigation = ({ }) => {
  const [navToggler, setNavToggler] = useState(false);
  const [navColor, setNavColor] = useState(false);
  const [scroll, setScroll] = useState(false);
  // const [nav, setNav] = useState(false);

  function mobilenav() {
    if (window.innerWidth > 991) {
      return "greater";
    }
  }
  mobilenav();
  // write program in css

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      setScroll(true);
    } else {
      setScroll(false);
    }
    if (window.scrollY >= 70) {
      setNavColor(true);
    } else {
      setNavColor(false);
      setNavToggler(false);
    }
  });

  function barBtn() {
    setNavToggler(!navToggler);
    // setNavColor(!navColor);
  }

  return (
    <>
      <header
        style={
          navColor
            ? {
              background: "rgba(0,0,0,.5)",
              backdropFilter: "blur(14px)",
            }
            : {}
        }
      // className={navToggler ? "nav__active" : ""}
      >
        <div className="outer">
          <div className="container">
            <div className="nav__grid">
              <div className="logo">
                <a href="https://t.me/PumpKingPepe">
                  <img
                    src={
                      img1
                    }
                    alt=""
                  />
                </a>
              </div>

              <nav style={{ right: navToggler ? 0 : "-100%" }}>
                <ul>
                  <div className="nav-logo-side">
                    <img src="/images/logo-01.png" alt="" />
                  </div>
                  {nav.map((ite, ind) => {
                    return (
                      <li key={ind}>
                        <a href={ite.path}>{ite.name}</a>
                      </li>
                    );
                  })}

                  {/* <li className="nav__links">
                    <a href="https://discord.gg/qTYfExSXZR" target="_blank">
                      <FaDiscord />
                    </a>
                    <a href=" https://twitter.com/kaiyocats" target="_blank">
                      <AiOutlineTwitter />
                    </a>
                  </li> */}
                </ul>
              </nav>

              <div className="nav__btns">
                {/* <div className="search">
                  <AiOutlineSearch />
                </div> */}

                <div className="join-btn">
                  <a href="https://t.me/PumpKingPepe" target="_blank">
                    <div className="btn">
                      <div className="text">Join Now</div>
                    </div>
                  </a>
                </div>
                <div className="nav-bar-wrap">
                  <div
                    className="nav-bar"
                    onClick={barBtn}

                  >
                    <HiOutlineBars3 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="nav-wrapper" onClick={() => setNavToggler(false)} className={navToggler ? 'active' : null}>
        <nav>
          <ul>
            <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <a href="#">
                <img src={img1} style={{ maxWidth: '100px' }} alt="" />
              </a>
              <RxCross2 onClick={() => setNavToggler(false)} />
            </li>

            <li>
              <a href="#about">ABOUT</a>
            </li>

            <li>
              <a href="#foooter">Contact</a>
            </li>
            <li>
              <a href="#tokenomics">Tokenomics</a>
            </li>

          </ul>
        </nav>
        <div className="cross">
          <RxCross2 />
        </div>
      </div>

      <div
        onClick={() => window.scroll(0, 0)}
        className="auto_scroll"
        style={scroll ? { transform: "scale(1)" } : {}}
      >
        <BsChevronUp />
      </div>
    </>
  );
};

export default Navigation;
