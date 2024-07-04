import React from "react";
import bg from "../../assets/texture.jpg";
import styles from "./Intro.module.css";
import { NavLink } from "react-router-dom";

function Intro() {
  return (
    <div className={styles.head}>
      <img src={bg} alt="background" className={styles.pic}></img>
      <p className={styles.name}>Hey! I Am Ansh Gangola</p>
      <p className={styles.tagline}>
        A Fourth Year BTech Student & a Enthusiastic Web Developer. Have Been a
        part of ,IEEE student branch Web-Development team of my college ,
        Celebal Summer Internship Program.
      </p>
      <NavLink to="about">KNOW ME!</NavLink>
    </div>
  );
}

export default Intro;
