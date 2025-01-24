"use client";
import React, { useState } from "react";
import styles from "../styles/top.module.css";

const Top = () => {
  const [input, setInput] = useState("");
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
          <button>Tweet</button>
        </div>
      </div>
    </div>
  );
};

export default Top;
