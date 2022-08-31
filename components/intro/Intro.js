import styles from "./Intro.module.scss";

export default function Intro() {
  return (
    <div className={styles.Intro}>
      <h1>
        Template by{" "}
        <a href="https://teamyotov.com" target="_blank" rel="noreferrer">
          TeamYotov
        </a>
      </h1>
      <p>content for intro</p>
    </div>
  );
}
