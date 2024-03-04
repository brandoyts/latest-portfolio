import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const intro = ["</Software Developer>", "</C# OVER C>", "</MUSICIAN>"];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brando Endona</title>
        <link
          rel="icon"
          href="https://www.flaticon.com/svg/vstatic/svg/3721/3721726.svg?token=exp=1611245941~hmac=7d4254e40c45bf985ab6d43b956a486c"
        />
      </Head>

      <div className={styles.textContent}>
        <h2 className={styles.textContent__name}>Brando Endona</h2>
        <div className={styles.textContent__job}>
          {" "}
          <Typewriter
            lassName={styles.textContent__job}
            options={{
              strings: intro,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <Link href="/portfolio">
          <a className={styles.textContent__btn}>
            MY WORK{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
}
