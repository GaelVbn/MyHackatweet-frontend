"use client";
import React, { useState } from "react";
import styles from "../styles/top.module.css";
import { useSelector, useDispatch } from "react-redux";
import { urlProd } from "../../../urlProd";
import { addTweet } from "../features/tweet";

const Top = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const [input, setInput] = useState("");

  const handlePostNewTweet = () => {
    if (user.token) {
      fetch(`${urlProd}/tweets`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: user.token,
          content: input,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.result) {
            const createdTweet = {
              ...data.tweets,
              author: user,
            };
            dispatch(addTweet(createdTweet));
            setInput("");
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className={styles.top}>
      <div className={styles.topcontainer}>
        <div className={styles.title}>
          <h1 style={{ fontSize: "20px" }}>Home</h1>
        </div>

        <input
          type="textarea"
          placeholder="What's up"
          className={styles.input}
          maxLength={280}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <div className={styles.tweetbtn}>
          <span style={{ fontSize: "13px" }}>{input.length}/280</span>
          <button onClick={handlePostNewTweet}>Tweet</button>
        </div>
      </div>
    </div>
  );
};

export default Top;
