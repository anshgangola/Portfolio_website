import React from "react";
import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";

import p1 from "../../assets/projects/p1.png";
import p2 from "../../assets/projects/p2.png";
import p3 from "../../assets/projects/p3.png";
import Footer from "../Footer/Footer";
import CodingProfile from "./CodingProfile";
import Achievements from "./Achievements";

const DATA = [
  {
    id: 1,
    title: "Portfolio Website",
    image: p1,
    description:
      "On my portfolio website, I invite you to join me on a journey of growth and potential. While my portfolio may be in its early stages, it reflects my enthusiasm, dedication, and eagerness to learn. It serves as a platform for me to showcase my skills, creativity, and unique perspective.",
    url: "/project/portfolio",
  },
  {
    id: 2,
    title: "IEEE Conference Website",
    image: p2,
    description:
      "I'm developing a website for upcoming IEEE conference at our college. Stay updated on the latest conference details, from renowned speakers to insightful sessions and workshops. Engage with fellow attendees through interactive features, fostering meaningful connections and collaboration.",
    url: "/project/conference",
  },
  {
    id: 3,
    title: "Amazon Clone Website",
    image: p3,
    description:
      "Experience the simplicity and convenience of ordering items from this website. With a user-friendly interface and streamlined design, placing your order has never been easier.",
    url: "/project/food",
  },
];

function Project() {
  return (
    <>
      <div className={styles.project}>
        <h1 className="section">PROJECTS</h1>
        {DATA.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            url={project.url}
          />
        ))}
      </div>
      <hr></hr>
      <CodingProfile></CodingProfile>
      <hr></hr>
      <Achievements></Achievements>
      <Footer />
    </>
  );
}

export default Project;
