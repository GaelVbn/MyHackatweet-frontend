import React from "react";
import styles from "../styles/center.module.css";
import Image from "next/image";
import { IoMdHeart } from "react-icons/io";
import { FaRegTrashCan } from "react-icons/fa6";

const data = [
  {
    username: "Gael",
    userhandle: "@Gaelvbn",
    avatar: "/avatar.png",
    date: "2 hours ago",
    tweet:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    username: "Anita",
    userhandle: "@Anitavbn",
    avatar: "/avatar.png",
    date: "2 hours ago",
    tweet: "je suis anita",
  },
];

const Center = () => {
  const listTweets = data.map((tweet) => {
    return (
      <div className={styles.container}>
        <div className={styles.tweetcontainer}>
          <div className={styles.profile}>
            <Image
              src={"/avatar.png"}
              alt={"logo"}
              width={50}
              height={50}
              style={{ borderRadius: "30%", marginLeft: "1rem" }}
            />

            <p style={{ fontWeight: "bold" }}>{tweet.username}</p>
            <p style={{ color: "gray", fontSize: "15px" }}>
              {tweet.userhandle}
            </p>
            <span style={{ color: "gray", fontSize: "12px" }}>·</span>
            <p style={{ color: "gray", fontSize: "12px" }}>{tweet.date}</p>
          </div>
        </div>
        <div className={styles.tweetcontent}>
          <p>{tweet.tweet}</p>
        </div>
        <div className={styles.likeandtrash}>
          <span>
            <IoMdHeart className={styles.heart} /> 0
          </span>
          <span>
            <FaRegTrashCan className={styles.trash} />
          </span>
        </div>
      </div>
    );
  });

  return <div className={styles.main}>{listTweets}</div>;
};

export default Center;
