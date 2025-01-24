import React from "react";
import Left from "../components/Left";
import Center from "../components/Center";
import Right from "../components/Right";
import styles from "./hashtagsPage.module.css";
import TopHashtags from "../components/TopHashtags";

const hashtagsPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <Left />
      </div>
      <div className={styles.topcenter}>
        <TopHashtags />
      </div>
      <div className={styles.center}>
        <Center />
      </div>
      <div className={styles.right}>
        <Right />
      </div>
    </div>
  );
};

export default hashtagsPage;
