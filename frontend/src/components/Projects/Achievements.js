import React from "react";
import styles from "./Achievements.module.css";
function Achievements() {
  return (
    <div className={styles.achieve}>
      <h1>Achievements</h1>
      <div className={styles.list}>
        <p>
          1. Cleared Codekaze’23, a coding competition organized by Coding
          Ninjas, with AIR 408.
        </p>
        <p>
          2. Solved more than 700 questions on leetcode,codeforces and other
          platforms.
        </p>
        <p>
          3. Worked as Web Developer at IEEE Student branch , Selected for
          Celebal Summer Internship Program{" "}
          <a
            href="https://drive.google.com/file/d/1ft-g-_C0augO3QvxuoIt2Uz7Jpgl0VRh/view?usp=sharing"
            className={styles.link}
          >
            Offer letter link
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Achievements;
