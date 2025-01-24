import React from "react";
import styles from "../styles/right.module.css";

const data = [
  {
    hashtag: "#qsdsd",
    numberOfHashtag: "1",
  },
  {
    hashtag: "#qsdsd",
    numberOfHashtag: "1",
  },
  {
    hashtag: "#qsdsd",
    numberOfHashtag: "1",
  },
];

const Right = () => {
  const listHashtags = data.map((hashtag) => {
    return (
      <div className={styles.trends}>
        <p style={{ fontWeight: "bold" }}>{hashtag.hashtag}</p>
        <p
          style={{
            color: "gray",
            fontSize: "12px",
            margin: 0,
            fontWeight: "bold",
          }}
        >
          {hashtag.numberOfHashtag} Tweets
        </p>
      </div>
    );
  });
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h1 style={{ margin: 0, fontSize: "20px" }}>Trends</h1>
      </div>

      <div className={styles.trendscontainer}>{listHashtags}</div>
    </div>
  );
};

export default Right;
