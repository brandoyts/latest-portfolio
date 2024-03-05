import React from "react";
import styles from "../styles/Skill.module.css";

function Skill({ icon }) {
	return <div className={styles.skill}>{icon}</div>;
}

export default Skill;
