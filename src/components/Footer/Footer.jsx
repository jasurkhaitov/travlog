import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./Footer.css";

export default function Footer() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <footer>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-5 col-xl-10 col-lg-12">
            <div className="footerLeft">
              <div className="footerLogo">
                <a href="#!">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.55273 3.59787C7.12207 4.59823 5.82837 5.78098 4.70532 7.1124C9.29462 6.68633 15.1252 7.38204 21.8944 10.7667C29.123 14.3809 34.9438 14.5031 38.9948 13.7217C38.6272 12.6088 38.1644 11.5392 37.6163 10.5224C32.979 11.0115 27.034 10.3641 20.1056 6.89998C15.706 4.70018 11.8278 3.79401 8.55273 3.59787ZM34.9074 6.66665C31.2453 2.575 25.9234 0 20 0C18.2605 0 16.5727 0.222107 14.9637 0.63948C17.1429 1.23409 19.4579 2.10399 21.8944 3.32227C26.967 5.85853 31.3464 6.67516 34.9074 6.66665ZM39.8609 17.6281C34.9669 18.5945 28.2088 18.396 20.1056 14.3444C12.53 10.5566 6.50043 10.6043 2.4339 11.508C2.224 11.5546 2.01904 11.6036 1.81903 11.6546C1.28662 12.8125 0.861634 14.0301 0.556702 15.2945C0.882386 15.2075 1.21893 15.1248 1.56616 15.0476C6.49957 13.9513 13.4701 13.9989 21.8944 18.2111C29.4701 21.9989 35.4996 21.9512 39.5662 21.0475C39.7055 21.0166 39.8428 20.9846 39.9778 20.9516C39.9926 20.6363 40 20.319 40 20C40 19.1975 39.9528 18.406 39.8609 17.6281ZM39.3248 25.1723C34.4783 26.0196 27.917 25.6944 20.1056 21.7888C12.53 18.001 6.50043 18.0487 2.4339 18.9524C1.53125 19.1529 0.719239 19.3972 0.00293 19.6551C0.000977 19.7698 0 19.8848 0 20C0 31.0457 8.95429 40 20 40C29.2571 40 37.0453 33.7109 39.3248 25.1723Z"
                      fill="url(#paint0_linear_1156_1146)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1156_1146"
                        x1="36"
                        y1="43.2"
                        x2="-3.73321"
                        y2="35.5931"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#5D50C6" />
                        <stop offset="1" stop-color="#F85E9F" />
                      </linearGradient>
                    </defs>
                  </svg>
                </a>

                <p>Travlog</p>
              </div>

              <p className="text">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC.
              </p>

              <ul className="logoContact">
                <li>
                  <i class="fa-brands fa-facebook-f"></i>
                </li>

                <li>
                  <i class="fa-brands fa-twitter"></i>
                </li>

                <li>
                  <i class="fa-solid fa-camera-retro"></i>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-2 col-xl-4 dnone">
            <ul>
              <p className="footerTitle">Company</p>
              <li>About</li>
              <li>Career</li>
              <li>Mobile</li>
            </ul>
          </div>

          <div className="col-2 col-xl-4 dnone">
            <ul>
              <p className="footerTitle">Contact</p>
              <li>Why Travlog?</li>
              <li>Partner with us</li>
              <li>FAQ’s</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="col-2 col-xl-4 dnone">
            <ul>
              <p className="footerTitle">Meet Us</p>
              <li>+00 92 1234 56789</li>
              <li>info@travlog.com</li>
              <li>205. R Street, New York</li>
              <li>BD23200</li>
            </ul>
          </div>

          <div className="col-12 disnone dblock">

            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography>
                    Company
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                    <ul>
                        <li>About</li>
                        <li>Career</li>
                        <li>Mobile</li>
                    </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography>
                    Contact
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                    <ul>
                        <li>Why Travlog?</li>
                        <li>Partner with us</li>
                        <li>FAQ’s</li>
                        <li>Blog</li>
                    </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography>
                    Meet Us
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                    <ul>
                        <li>+00 92 1234 56789</li>
                        <li>info@travlog.com</li>
                        <li>205. R Street, New York</li>
                        <li>BD23200</li>
                    </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>

          </div>
        </div>
      </div>
    </footer>
  );
}
