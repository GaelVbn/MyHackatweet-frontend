"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/right.module.css";
import { urlProd } from "../../../urlProd";
import { useSelector } from "react-redux";

interface Trend {
  hashtag: string;
  numberOfHashtag: number;
}

const Right = () => {
  const user = useSelector((state: any) => state.user);
  const tweetData = useSelector((state: any) => state.tweet.value);

  const [trends, setTrends] = useState<Trend[]>([]);
  useEffect(() => {
    fetch(`${urlProd}/tweets/trends/${user.token}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          setTrends(data.trends);
        }
      });
  }, [tweetData]);

  const listHashtags = trends.map((hashtag, index) => {
    return (
      <div className={styles.trends} key={index}>
        <a
          href={`/hashtagsPage/${hashtag.hashtag.slice(1)}`}
          style={{
            fontWeight: "bold",
            color: "#0a6cc1",
            textDecoration: "none",
          }}
        >
          {hashtag.hashtag}
        </a>
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

      {listHashtags.length > 0 ? (
        <div className={styles.trendscontainer}>{listHashtags}</div>
      ) : (
        <div
          className={styles.trendscontainer}
          style={{ textAlign: "center", padding: "0.2rem" }}
        >
          No Trends
        </div>
      )}
    </div>
  );
};

export default Right;
