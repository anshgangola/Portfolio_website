import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div>
          <h1>Ansh Gangola</h1>
          <p>An Engineering Enthusiast</p>
        </div>
        <div>
          <h1>SOCIALS</h1>
          <div className={styles.social}>
            <Link to="https://github.com/anshgangola">
              <FontAwesomeIcon
                className={styles.icon}
                size="lg"
                icon={faGithub}
              ></FontAwesomeIcon>
            </Link>
            <Link to="https://www.linkedin.com/in/ansh-gangola-408092233/">
              <FontAwesomeIcon
                className={styles.icon}
                size="lg"
                icon={faLinkedin}
              ></FontAwesomeIcon>
            </Link>
          </div>
        </div>
      </div>
      <hr></hr>
      <p className={styles.para}>
        © Copyright 2023.Design and developed by Ansh Gangola
      </p>
    </div>
  );
}

export default Footer;
