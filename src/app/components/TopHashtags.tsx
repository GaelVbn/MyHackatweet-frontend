"use client";
import React, { useState } from "react";
import styles from "../styles/topHashtags.module.css";

const TopHashtags = () => {
  const [input, setInput] = useState("");
  return (
    <div className={styles.top}>
      <div className={styles.topcontainer}>
        <div className={styles.title}>
          <h1 style={{ fontSize: "20px" }}>Hashtags</h1>
        </div>

        <input
          type="textarea"
          placeholder="Search #"
          className={styles.input}
          maxLength={280}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TopHashtags;
