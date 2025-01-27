"use client";
import React from "react";
import Image from "next/image";
import styles from "../styles/left.module.css";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/user";

const Left = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state: any) => state.user);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image
          src={"/logo.png"}
          alt={"logo"}
          width={50}
          height={50}
          priority
          onClick={() => {
            window.location.reload();
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
                {user.firstname}
              </p>
              <p style={{ color: "gray", fontSize: "15px", margin: 0 }}>
                @{user.username}
              </p>
            </div>
          </div>
        </div>

        <div>
          <button className={styles.logout} onClick={() => dispatch(logout())}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;
