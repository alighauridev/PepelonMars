import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/roadmap.scss";
import { roadmap } from "../assests/data";
import img1 from "../assests/images/roadmap1.webp";
import img2 from "../assests/images/banner.webp";
const Roadmap = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
    // how to check page distance from top
  }, []);

  return (
    <>
      <section id="roadmap" className="roadmap">
        <div className="heading">
          <h2>Roadmp</h2>

          <p>
            Sneak peek at what $PepeWife has in store for the future. Of course, we don't want to spoil all the surprises right off the bat, so expect some unexpected twists and turns along the way. Stay tuned for what's to come, it's going to be an exciting journey!"
          </p>
        </div>


        <div className="container">
          <div className="roadmap__grid">
            {roadmap.map((item, i) => {
              return (
                <>
                  <div className={`item ${i % 2 == 0 ? "left" : "right"}`} data-aos-easing="ease-out"
                    data-aos="fade-up"
                    data-aos-delay="300">

                    <h3>Phase {i + 1}</h3>
                    <ul>
                      {
                        item.points.map((ite, index) => {
                          return (
                            <li>{ite}</li>
                          )
                        })
                      }

                    </ul>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
