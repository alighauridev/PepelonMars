import React from "react";
import "../scss/special.scss";
const Special = () => {
  return (
    <>
      <section id="special" className="special">
        <div className="container">
          <div className="special-content">
            <div className="special-h">
              <div className="wrap-heading">
                <div className="heading">
                  <h6>Platform Benifits</h6>
                </div>
              </div>
              <h4>The CoinMatch Way</h4>
              <div className="para">
                <p>Today, CoinMatch is the most intelligent and user-friendly platform for smarter crypto trading. Our advanced AI algorithms help investors make more informed investment decisions and maximize their profit potential, regardless of market conditions.</p>
              </div>
            </div>

            <div className="special-grid">
              <div className="grid-iteam">
                <div className="iteam">
                  <div className="icon-wrapper">
                    <div className="icon">
                      <img
                        src="/images/website content/icon-special-1.png"
                        alt=""
                      />
                    </div>{" "}
                  </div>

                  <div className="iteam-content">
                    <h4>Smarter Investments </h4>
                    <p> CoinMatch AI uses advanced algorithms to identify secure and profitable investments.</p>
                  </div>
                  <span>01</span>
                </div>
              </div>
              <div className="grid-iteam">
                <div className="iteam">
                  <div className="icon-wrapper">
                    <div className="icon">
                      <img
                        src="/images/website content/icon-special-2.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="iteam-content">
                    <h4> Minimized Risk </h4>
                    <p>Investors can minimize risk by avoiding high-risk projects identified by CoinMatch AI.
                    </p>
                  </div>
                  <span>02</span>
                </div>
              </div>
              <div className="grid-iteam">
                <div className="iteam">
                  <div className="icon-wrapper">
                    <div className="icon">
                      <img
                        src="/images/website content/icon-special-3.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="iteam-content">
                    <h4>Time Savings </h4>
                    <p>CoinMatch AI-powered tools save investors time by eliminating the need for extensive research and analysis.</p>
                  </div>
                  <span>03</span>
                </div>
              </div>
              <div className="grid-iteam">
                <div className="iteam">
                  <div className="icon-wrapper">
                    <div className="icon">
                      <img
                        src="/images/website content/icon-special-4.png"
                        alt=""
                      />
                    </div>


                  </div>
                  <div className="iteam-content">
                    <h4>User-Friendly Interface </h4>
                    <p>CoinMatch AI's intuitive interface is easy to navigate, making it ideal for both experienced and new investors looking for smarter, more strategic investing.</p>
                  </div>
                  <span>04</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Special;
