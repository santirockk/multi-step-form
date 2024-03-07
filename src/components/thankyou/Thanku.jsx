import { Container } from "../container/Container";
import styles from "./Thanku.module.css";

export const Thanks = () => {
  return (
    <>
      <Container>
        <div className={styles.thanks}>
          <img
            className={styles.img}
            src="./images/icon-thank-you.svg"
            alt="thank you"
          />
          <h1>Thank you!</h1>
          <p>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </Container>
      <div className={styles.foot}></div>
    </>
  );
};

export const ThanksDesktop = () => {
  return (
    <div className={styles.desktop}>
      <div className={styles.thanks}>
        <img
          className={styles.img}
          src="./images/icon-thank-you.svg"
          alt="thank you"
        />
        <h1 className={styles.h1}>Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};
