import React from "react";
import "../scss/footer.scss";
import instagram from "../assests/instagram.png"
const Footer = () => {
  return (
    <>
      <footer id="foooter">
        <div className="container">
          <div className="top">
            <h2>
              CONTACT</h2>

            <div className="icons">
              <a href="https://t.me/PepelonmarsEth" target="_blank">
                <img src="https://static.wixstatic.com/media/1f3f2b_af942b4585dd4bf9baaa6e151c02f1b4~mv2.png/v1/fill/w_57,h_57,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/twttttee2.png" alt="" />
              </a>
              <a href="https://twitter.com/pepelonmarseth?s=21&t=heHnGpBvbLU5zrLyojhwjg" target="_blank">
                <img src="https://static.wixstatic.com/media/1f3f2b_f59a557a4c72456581fa206a9247dcac~mv2.png/v1/fill/w_57,h_57,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/twtttt.png" alt="" />
              </a>

            </div>
            <p>
              <a href="mailto:contact@pepelonmars.com">contact@pepelonmars.com </a>
            </p>
            <p>
              $PepelonMars PepelonMars coin has no association with Matt Furie or his creation Pepe the Frog. This is a fan token and community driven project

            </p>
            <p>
              $PepelonMars is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. The coin is completely useless and for entertainment purposes only
            </p>
          </div>
        </div>
      </footer>
      <div className="bottom">
        © 2023 by PepelonMars. All rights reserved!
      </div>
    </>
  );
};

export default Footer;
