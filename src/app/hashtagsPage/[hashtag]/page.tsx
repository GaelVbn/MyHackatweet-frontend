"use client";
import React from "react";
import Left from "../../components/Left";
import Right from "../../components/Right";
import styles from "../[hashtag]/hashtagsPage.module.css";
import TopHashtags from "../../components/TopHashtags";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import CenterHashtags from "../../components/CenterHashtags";

const hashtagsPage = () => {
  const router = useRouter();
  const user = useSelector((state: any) => state.user);

  if (!user.token) {
    setTimeout(() => {
      router.push("/");
    }, 0);
  }

  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <Left />
      </div>
      <div className={styles.topcenter}>
        <TopHashtags />
      </div>
      <div className={styles.center}>
        <CenterHashtags />
      </div>
      <div className={styles.right}>
        <Right />
      </div>
    </div>
  );
};

export default hashtagsPage;
