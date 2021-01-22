import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";

function Header() {
	return (
		<header className={styles.header}>
			<nav>
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/portfolio">
					<a>Portfolio</a>
				</Link>
				<Link href="/about">
					<a>About</a>
				</Link>
			</nav>
		</header>
	);
}

export default Header;
