import Image from "next/image";
import styles from "./About.module.scss";
import { IoIosArrowForward } from "react-icons/io";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <section className={styles.container}>
      <div className={styles.image}>
        <Image
          src="/images/about-img.webp"
          alt="aboutImg"
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
        />
      </div>
      <div
        className={
          inView ? `${styles.content} ${styles.inView}` : `${styles.content} `
        }
        ref={ref}
      >
        <div className={styles.titleWrapper}>
          <span>ABOUT</span>
          <h2>We are the best Interior, Exterior & Architecture Firm</h2>
        </div>
        <div className={styles.descriptionWrapper}>
          <p>
            On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand
            times and everything that was left from its origin would be the word
            &quot;and&quot; and the Little Blind Text should turn around and
            return to its own, safe country. But nothing the copy said could
            convince her and so it didn’t take long until a few insidious Copy
            Writers ambushed her, made her drunk with Longe and Parole and
            dragged her into their agency, where they abused her for their.
          </p>
          <p>
            When she reached the first hills of the Italic Mountains, she had a
            last view back on the skyline of her hometown Bookmarksgrove, the
            headline of Alphabet Village and the subline of her own road, the
            Line Lane. Pityful a rethoric question ran over her cheek, then she
            continued her way.
          </p>
          <a href="#">
            Learn More <IoIosArrowForward />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
