import React from "react";
import Header from "./Header";
import Head from "next/head";
import styles from "../styles/Layout.module.css";

function Layout({ title, children }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Brando Endona | {title}</title>
				<link
					rel="icon"
					href="https://www.flaticon.com/svg/vstatic/svg/3721/3721726.svg?token=exp=1611245941~hmac=7d4254e40c45bf985ab6d43b956a486c"
				/>
			</Head>
			<Header />

			<p className={styles.pageTitle}>{title}</p>

			<main>{children}</main>
		</div>
	);
}

export default Layout;
