import styles from "./WorkFlow.module.scss";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { FaDraftingCompass } from "react-icons/fa";
import { FiLayers } from "react-icons/fi";
import WorkFlowCards from "../../components/workFlowCards/WorkFlowCards";
import { useInView } from "react-intersection-observer";

const data = [
  {
    icon: <GiPoliceOfficerHead />,
    title: "PERFECTLY DESIGN",
    description:
      "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
  {
    icon: <FaDraftingCompass />,
    title: "CAREFULLY PLANNED",
    description:
      "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
  {
    icon: <FiLayers />,
    title: "Smartly Execute",
    description:
      "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
];

const WorkFlow = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <div className={styles.wrapper}>
      <div
        className={
          inView
            ? `${styles.container} ${styles.inView}`
            : `${styles.container} `
        }
        ref={ref}
      >
        <div className={styles.topContent}>
          <h2>Our Work Flow</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in.
          </p>
        </div>
        <div className={styles.botContent}>
          {data.map((singleData, i) => (
            <WorkFlowCards
              key={i}
              icon={singleData.icon}
              title={singleData.title}
              description={singleData.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
