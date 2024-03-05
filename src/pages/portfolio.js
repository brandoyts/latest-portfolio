import React from "react";
import styles from "../styles/Portfolio.module.css";
import Layout from "../components/Layout";
import Project from "../components/Project";
import projects from "../projects.json";

function portfolio({ projects }) {
	const renderProjects = () => {
		return projects.map((project, index) => (
			<Project
				key={index}
				title={project.title}
				description={project.description}
				imageSrc={project.imageSrc}
				demoLink={project.demoLink}
				gitLink={project.gitLink}
			/>
		));
	};

	return (
		<Layout title="Portfolio">
			<div className={styles.container}>{renderProjects()}</div>
		</Layout>
	);
}

export async function getStaticProps() {
	const PROJECTS = projects;

	return {
		props: {
			projects: PROJECTS,
		},
	};
}

export default portfolio;
