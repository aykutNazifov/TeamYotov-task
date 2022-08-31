import Image from "next/image";
import styles from "./HomeSlider.module.scss";

const HomeSlider = () => {
  return (
    <section className={styles.homeSlider}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>
            We Love <br /> Modern Design
          </h1>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
          <button className={styles.btn}>View our works</button>
        </div>

        <div className={styles.image}>
          <Image
            src="/images/bg_2.jpg.webp"
            alt="image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <p className={styles.sideText}>SINCE - 2018</p>
      <div className={styles.dots}>
        <button className={`${styles.dot} ${styles.activeDot}`}></button>
        <button className={styles.dot}></button>
      </div>
    </section>
  );
};

export default HomeSlider;
