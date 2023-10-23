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
              <a href="https://t.me/PumpKingPepe" target="_blank">
                <img src="https://static.wixstatic.com/media/1f3f2b_af942b4585dd4bf9baaa6e151c02f1b4~mv2.png/v1/fill/w_57,h_57,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/twttttee2.png" alt="" />
              </a>
              <a href="https://x.com/pumpkingpepe" target="_blank">
                <img src="https://static.wixstatic.com/media/1f3f2b_f59a557a4c72456581fa206a9247dcac~mv2.png/v1/fill/w_57,h_57,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/twtttt.png" alt="" />
              </a>

            </div>
            <p>
              <a href="mailto:contact@PumpKingPepe.com">contact@pumpkingpepe.com </a>
            </p>

          </div>
        </div>
      </footer>
      <div className="bottom">
        © 2023 by PumpKingPepe. All rights reserved!
      </div>
    </>
  );
};

export default Footer;
