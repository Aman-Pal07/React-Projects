import { getImageUrl } from "../../util";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel Free to Reach Out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="" />
          <a href="mailto:myemail@email.com">myemail@email.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="" />
          <a href="">linkedin.com/myname</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="" />
          <a href="">github.com/myname</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
