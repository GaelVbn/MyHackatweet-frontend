"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/center.module.css";
import Image from "next/image";
import { IoMdHeart } from "react-icons/io";
import { FaRegTrashCan } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { urlProd } from "../../../urlProd";
import { deleteTweet, isLiked, setTweets } from "../features/tweet";
import { useParams } from "next/navigation";

const CenterHashtags = () => {
  const dispatch = useDispatch();
  const tweets = useSelector((state: any) => state.tweet.value);
  const user = useSelector((state: any) => state.user);

  const params = useParams();
  const hashtag = params?.hashtag;

  useEffect(() => {
    if (!hashtag || !user.token) return;
    fetch(`${urlProd}/tweets/hashtag/${user.token}/${hashtag}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          dispatch(setTweets(data.tweets));
        }
      });
  }, [hashtag, user.token]);

  const handleDelete = (id: number) => {
    fetch(`${urlProd}/tweets`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: user.token,
        tweetId: id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          dispatch(deleteTweet(data.tweetId));
        }
      })
      .catch((err) => console.log(err));
  };

  const handleLike = (id: number) => {
    fetch(`${urlProd}/tweets/like`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: user.token,
        tweetId: id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        data.result &&
          dispatch(isLiked({ tweetId: id, username: user.username }));
      })
      .catch((err) => console.log(err));
  };

  const listTweets = tweets.map((tweet: any, index: number) => {
    const formattedContent = tweet.content
      .split(" ")
      .map((word: string, idx: number) => {
        if (word.startsWith("#")) {
          return (
            <a
              href={`/hashtagsPage/${word.slice(1)}`}
              key={`${index}-${idx}`}
              style={{
                fontWeight: "bold",
                color: "#0a6cc1",
                textDecoration: "none",
              }}
            >
              {word}
            </a>
          );
        }
        return word + " ";
      });
    return (
      <div className={styles.container} key={tweet._id}>
        <div className={styles.tweetcontainer}>
          <div className={styles.profile}>
            <Image
              src={tweet.avatar || "/avatar.png"}
              alt={"logo"}
              width={50}
              height={50}
              style={{ borderRadius: "30%", marginLeft: "1rem" }}
            />

            <p style={{ fontWeight: "bold" }}>{tweet.author?.username}</p>
            <p style={{ color: "gray", fontSize: "15px" }}>
              @{tweet.author?.username}
            </p>
            <span style={{ color: "gray", fontSize: "12px" }}>·</span>
            <p style={{ color: "gray", fontSize: "12px" }}>
              {moment(tweet.createdAt).fromNow()}
            </p>
          </div>
        </div>
        <div className={styles.tweetcontent}>
          <p>{formattedContent}</p>
        </div>
        <div className={styles.likeandtrash}>
          <span>
            <IoMdHeart
              className={styles.heart}
              onClick={() => handleLike(tweet._id)}
              style={{
                color: tweet.likes.some(
                  (e: any) => user && e.username === user.username
                )
                  ? "red"
                  : "white",
              }}
            />
            {tweet.likes.length}
          </span>
          <span>
            {tweet.author?.username === user.username && (
              <FaRegTrashCan
                className={styles.trash}
                onClick={() => handleDelete(tweet._id)}
              />
            )}
          </span>
        </div>
      </div>
    );
  });

  return tweets.length > 0 ? (
    <div className={styles.main}>{listTweets}</div>
  ) : (
    <div className={styles.main} style={{ textAlign: "center" }}>
      No Tweets
    </div>
  );
};

export default CenterHashtags;
