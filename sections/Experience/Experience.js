import { useEffect, useState } from "react";
import ExperienceCards from "../../components/experienceCards/ExperienceCards";
import styles from "./Experience.module.scss";

const data = [
  { number: 18, text: "Years of Experience" },
  { number: 351, text: "Happy Clients" },
  { number: 564, text: "Finished Projects" },
  { number: 300, text: "Working Days" },
];

const Experience = () => {
  const [bgPosition, setBgPostition] = useState(0);

  const changeBgPosition = () => {
    setBgPostition(-window.scrollY - 150);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBgPosition);

    return () => {
      window.removeEventListener("scroll", changeBgPosition);
    };
  }, [bgPosition]);
  return (
    <section
      className={styles.wrapper}
      style={{ backgroundPosition: `50% ${bgPosition}px` }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        {data.map((singleData, i) => (
          <ExperienceCards
            key={i}
            number={singleData.number}
            text={singleData.text}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
