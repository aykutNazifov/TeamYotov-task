import styles from "./ExperienceCards.module.scss";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const ExperienceCards = ({ number, text }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <div className={styles.singleCard}>
      <p className={styles.textNumber} ref={ref}>
        {inView && <CountUp end={number} start={0} duration={3} />}
      </p>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default ExperienceCards;
