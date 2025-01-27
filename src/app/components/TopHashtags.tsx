"use client";
import React, { useState } from "react";
import styles from "../styles/topHashtags.module.css";
import { useRouter } from "next/navigation";

const TopHashtags = () => {
  const [input, setInput] = useState("");

  const router = useRouter();

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
          onChange={(e) => setInput(e.target.value.replace(/#/g, ""))}
          onKeyUp={(e) =>
            e.key === "Enter" && router.push(`/hashtagsPage/${input}`)
          }
        />
      </div>
    </div>
  );
};

export default TopHashtags;
