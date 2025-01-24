import React from "react";
import styles from "./homePage.module.css";
import Left from "../components/Left";
import Top from "../components/Top";
import Center from "../components/Center";
import Right from "../components/Right";

const homePage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <Left />
      </div>
      <div className={styles.topcenter}>
        <Top />
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

export default homePage;
