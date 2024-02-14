import { getImageUrl } from "../../util";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, <span> I'am Aman</span>
        </h1>
        <p className={styles.description}>
          I'm a full-stack developer with 5 year of experience using React and
          Nodejs. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt=""
        className={styles.heroImg}
      />
    </section>
  );
};

export default Hero;
