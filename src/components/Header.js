import Link from "next/link";
import React from "react";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;
