import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import HomeSlider from "../sections/HomeSlider/HomeSlider";
import About from "../sections/About/About";
import Experience from "../sections/Experience/Experience";
import WorkFlow from "../sections/WorkFlow/WorkFlow";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Template by TeamYotov</title>
        <meta name="description" content="Created by TeamYotov" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeSlider />
      <About />
      <Experience />
      <WorkFlow />
    </div>
  );
}
