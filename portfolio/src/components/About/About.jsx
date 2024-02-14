import { getImageUrl } from "../../util";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt=""
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and opitimized sites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="" />
            <div className={styles.aboutItemText}>
              <h3>Back-end Developer</h3>
              <p>
                I have experience developing fast and optimised back-end system
                and APIs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="" />
            <div className={styles.aboutItemText}>
              <h3>UI/UX Developer</h3>
              <p>
                I have designed multiple landing page and have created design
                systems as well.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
