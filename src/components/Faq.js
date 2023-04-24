import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "../scss/faq.scss";
import { FAQ } from "../assests/data";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Faq = () => {
  const classes = useStyles();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <section id="faq" className="accordian">
        <div className="cloud"></div>
        <div className="faq-h">
          <div className="wrap-heading">
            <div className="heading">
              <h6>FAQs</h6>
            </div>
          </div>
          <div className="faq-2">
            <h2
              data-aos="zoom-out"
              data-aos-easing="ease-out"
              data-aos-once="true"
            >
              Frequently Aksed Questions
            </h2>
          </div>
          <div className="para">
            <h5>

            </h5>
          </div>
        </div>
        <div className="container">
          <div className="accordian__grid">
            <div className="end">
              <div className={classes.root}>
                {FAQ.map((item, i) => {
                  return (
                    <Accordion key={i}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.heading}>
                          {item.q}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          {item.ans}
                          <p>{item?.sec}</p>
                          <ul>
                            {item.list
                              ? item.list.map((ite, i) => {
                                return <li key={i}>{ite}</li>;
                              })
                              : ""}
                          </ul>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              </div>
            </div>
            <div className="start">
              <div className="img">
                <img src="/images/nft/2-.png" width="100%" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
