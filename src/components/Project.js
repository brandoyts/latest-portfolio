import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

import { BiCodeAlt } from "react-icons/bi";
import { CgBrowser } from "react-icons/cg";
import Link from "next/link";
import React from "react";
import styles from "../styles/Project.module.css";

SwiperCore.use([Navigation, Pagination]);

function Project({ title, description, imageSrc, demoLink, gitLink }) {
  const renderSlides = () => {
    return imageSrc?.map((src, index) => (
      <SwiperSlide key={index}>
        <img src={src} alt={title} />
      </SwiperSlide>
    ));
  };

  const renderGitLink = () => {
    return gitLink ? (
      <Link href={gitLink ? gitLink : "#"} target="_blank">
        Source <BiCodeAlt />
      </Link>
    ) : (
      <Link href={gitLink ? gitLink : "#"} className={styles.disabled}>
        Private <BiCodeAlt />
      </Link>
    );
  };

  const renderDemoLink = () => {
    return demoLink ? (
      <Link href={demoLink ? demoLink : "#"} target="_blank">
        Demo <CgBrowser />
      </Link>
    ) : (
      <Link href={demoLink ? demoLink : "#"} className={styles.disabled}>
        Private
        <CgBrowser />
      </Link>
    );
  };

  return (
    <div className={styles.project}>
      <div className={styles.project__img}>
        <Swiper
          navigation
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={1}
        >
          {renderSlides()}
        </Swiper>
      </div>

      <div className={styles.links}>
        {renderGitLink()}
        {renderDemoLink()}
      </div>

      <div className={styles.project__textContent}>
        <p className={styles.project__textContent__title}>{title}</p>
        <p className={styles.project__textContent__description}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default Project;
