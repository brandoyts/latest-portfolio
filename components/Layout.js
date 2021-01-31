import React from "react";
import Header from "./Header";
import Head from "next/head";
import styles from "../styles/Layout.module.css";

function Layout({ title, children }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Brando Endona | {title}</title>
			</Head>
			<Header />

			<p className={styles.pageTitle}>{title}</p>

			<main>{children}</main>
		</div>
	);
}

export default Layout;
