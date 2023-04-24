import React, { useState, useEffect, useRef } from "react";
import "./scss/normalize.css";
import Banner from "./components/Banner";
// import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Roadmap from "./components/Roadmap";

import "./scss/reset.css";
import AboutNft from "./components/AboutNft";


import Loader from "./components/Loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Token from "./components/Token";
// import bottom2 from "./components/companion-bg.2c17497b.jpg";
var Spinner = require("react-spinkit");
function App() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#fff");
  const containerRef = useRef(null);



  return (
    <>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          <main>
            <Banner />

            <AboutNft />
            {/* <Join /> */}
            {/* <Collection /> */}

            {/* <Token /> */}
            {/* <Roadmap /> */}

            {/* <Info /> */}


            <Footer />
            <ToastContainer />
          </main>
        </>
      )}
    </>
  );
}

export default App;
