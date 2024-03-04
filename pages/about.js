import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/About.module.css";

import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import Skill from "../components/Skill";

function about() {
  return (
    <Layout title="About">
      <div className={styles.about}>
        <div className={styles.about__textContent}>
          <p>
            My passion is all coding. I like the logic and structure of coding
            and always strive to write elegant and efficient code. In terms of
            web designing, i enjoy taking complex problems and taking them into
            simple and beautiful UI designs.
          </p>

          <div className={styles.about__skills}>
            <p>My Development Skills</p>
            <div>
              <Skill icon={<AiFillHtml5 />} />
              <Skill icon={<FaCss3Alt />} />
              <Skill icon={<FaSass />} />
              <Skill icon={<SiTailwindcss />} />
              <Skill icon={<SiJavascript />} />
              <Skill icon={<FaReact />} />
              <Skill icon={<DiNodejs />} />
              <Skill icon={<FaPhp />} />
              <Skill icon={<FaLaravel />} />
              <Skill icon={<SiMysql />} />
              <Skill icon={<FaGithub />} />
              <Skill icon={<FaAws />} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default about;
