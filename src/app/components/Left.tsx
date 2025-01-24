"use client";
import React from "react";
import Image from "next/image";
import styles from "../styles/left.module.css";
import { useRouter } from "next/navigation";

const Left = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image
          src={"/logo.png"}
          alt={"logo"}
          width={50}
          height={50}
          onClick={() => {
            router.push("/homePage");
          }}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div>
        <div className={styles.profilecontainer}>
          <div className={styles.profile}>
            <Image
              src={"/avatar.png"}
              alt={"avatar"}
              width={50}
              height={50}
              style={{ borderRadius: "30%", marginLeft: "3rem" }}
            />
            <div>
              <p
                style={{ fontWeight: "bold", margin: 0, paddingBottom: "5px" }}
              >
                Gael
              </p>
              <p style={{ color: "gray", fontSize: "15px", margin: 0 }}>
                @Gaelvbn
              </p>
            </div>
          </div>
        </div>

        <div>
          <button className={styles.logout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Left;
