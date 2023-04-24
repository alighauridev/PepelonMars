import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../scss/Collection.scss";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css/autoplay";
import { collection, nft } from "../assests/data";
import { ImCross } from "react-icons/im";
import { Parallax, Background } from "react-parallax";
import { gsap } from "gsap";
import { TimelineLite, Power4 } from "gsap/gsap-core";
import { EffectCoverflow, Pagination } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import { Bounce, Back, Elastic } from "gsap";
const Collection = ({ ease }) => {
  const [modal, setModal] = useState(false);
  const [id, setId] = useState([]);
  const modalanim = useRef(null);
  const [item, setItem] = useState(3);
  const [padding, setPadding] = useState(40);
  function sliderResponsive() {
    if (window.innerWidth > 1200) {
      setItem(3.5);
    }
    if (window.innerWidth < 1000) {
      setItem(3);
    }
    if (window.innerWidth < 1200) {
      setItem(2);
    }
    if (window.innerWidth < 780) {
      setItem(1);
      setPadding(10);
    }
    if (window.innerWidth < 520) {
      setItem(1);
      setPadding(60);
    }
  }
  const crossBtn = () => {
    setModal(false);
    tl.to(".widdd", 0, {
      width: 0,
      ease: Power4.easeOut,
    });
    setId(null);
  };
  useEffect(() => {
    sliderResponsive();
  }, [item]);
  console.log(id);
  const tl = new gsap.timeline();
  const handleModel = (idd) => {
    const filterItem = collection.filter((ite) => {
      return ite.id === idd;
    });

    setModal(true);
    setId(filterItem);
  };
  window.addEventListener("scroll", () => {

  });
  useEffect(() => {
    tl.to(".contain", 0.5, {
      scale: modal ? 1 : 0,
      ease: Back.easeOut,
      opacity: modal ? 1 : 0,
      // delay: 100,
    });
    tl.fromTo(
      ".pop-image",
      0.5,
      {
        x: -50,
        scale: 1,
        ease: Power4.easeIn,
      },
      {
        x: 0,
        scale: 1,
        ease: Power4.easeIn,
      }
    );
    tl.from(".widdd", 0.5, {
      width: 0,
      ease: Power4.easeOut,
    });
  }, [modal]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);
  SwiperCore.use([Autoplay]);

  return (
    <>
      <section className="collection" id="collection">
        <div className="collection-heading" style={{ overflow: "hidden" }}>
          <div className="wrap-heading">
            <div className="heading">
              <h6>Our Speciality</h6>
            </div>
          </div>
          <div className="collection-h">
            <h2 data-aos="zoom-out" data-aos-easing="ease-out">
              OUR COLLECTION
            </h2>
          </div>

        </div>
        <div className="container">

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={item}
            spaceBetween={30}

            parallax={true}
            autoplay={{
              delay: 10000500,
              disableOnInteraction: true,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {collection.map((item, i) => {
              const randomGen = (min, max) =>
                Math.random(Math.floor() * (max - min + 1) + min);

              return (
                <SwiperSlide key={i} className="item">
                  <div
                    className={`nft  ${randomGen(1, 2)}`}
                    // data-aos="fade-up"
                    data-aos-delay={10 * i}
                    onClick={() => handleModel(item.id)}
                  >
                    <div className="top">
                      <img src="/images/logo.gif" alt="" />
                      <h4>{item.name}</h4>
                    </div>
                    <div className="img">
                      <img
                        src={item.path ? item.path : `/images/nft/2.png`}
                        alt=""
                      />
                    </div>

                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div
          className="pop"
          style={
            modal
              ? { transform: "translate(-50%, -50%) scale(1)", opacity: "1" }
              : { transform: "translate(-50%, -50%) scale(0)", opacity: "0" }
          }
          onClick={() => setModal(false)}
        >
          {id?.map((item, i) => {
            return (
              <div className="contain">
                <ImCross onClick={() => setModal(false)} />
                <div className="head">
                  <h3>{item.name}</h3>
                  <p>
                    Humanoids Back on planet Earth, a new version of humans was
                    created. Humanoids developed human abilities by using
                    complex technologies and became V2.0 of humans. They are
                    full of creativity, innovation and improvisation. Their
                    human nature allows them to triumph over their opponents,
                    although sometimes their emotions get the best of them.
                  </p>
                </div>
                <div className="grid">
                  <div className="img">
                    <img
                      data-aos="zoom-out"
                      src={"/images/nft/2-.png"}
                      alt=""
                      className="pop-image"
                    />
                  </div>
                  <div className="detail">
                    <ul>
                      {[12, 32, 43, 12, 32, 1, 343, 56, 76, 78, 79, 89].map(
                        (ite) => {
                          return (
                            <li>
                              <h4>Power</h4>
                              <div>
                                <div
                                  className="widdd"
                                  style={{
                                    width: `${Math.floor(
                                      Math.random() * 100
                                    )}%`,
                                  }}
                                ></div>
                              </div>
                            </li>
                          );
                        }
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Collection;
