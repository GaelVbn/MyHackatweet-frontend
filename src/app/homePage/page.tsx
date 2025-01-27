"use client";
import React, { useEffect } from "react";
import styles from "./homePage.module.css";
import Left from "../components/Left";
import Top from "../components/Top";
import Center from "../components/Center";
import Right from "../components/Right";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { urlProd } from "../../../urlProd";
import { setTweets } from "../features/tweet";

const homePage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state: any) => state.user);

  if (!user.token) {
    setTimeout(() => {
      router.push("/"); // 🔥 Redirection après un court délai
    }, 0);
  }
  // useEffect pour récupérer tout les tweets apres le chargement de la page
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${urlProd}/tweets/all/${user.token}`);
        const data = await res.json();
        data.result && dispatch(setTweets(data.tweets));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

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
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
