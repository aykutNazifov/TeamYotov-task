import styles from "./WorkFlowCards.module.scss";

const WorkFlowCards = ({ icon, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <div className={styles.icon}>{icon}</div>
      </div>

      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WorkFlowCards;
