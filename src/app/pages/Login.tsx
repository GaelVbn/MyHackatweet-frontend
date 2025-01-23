"use client";
import React, { useState } from "react";
import styles from "../styles/login.module.css";
import Image from "next/image";
import { Bacasime_Antique } from "next/font/google";

const Login = () => {
  const [modalSignup, setModalSignup] = useState(false);
  const [modalSignin, setModalSignin] = useState(false);
  return (
    <div className={`${styles.container}`}>
      {/* background*/}
      <div
        className={`${styles.background} ${
          modalSignup || modalSignin ? styles.dimmed : ""
        }`}
      >
        <Image src={"/logo.png"} alt="" width={300} height={300} />
      </div>

      {/* login side*/}
      <div
        className={`${styles.login} ${
          modalSignup || modalSignin ? styles.dimmed : ""
        }`}
      >
        <div className={styles.logincontainer}>
          <Image src={"/logo.png"} alt="" width={50} height={50} />
          <h1 className={styles.title}>
            See what's <br />
            happening
          </h1>
          <h2 className={styles.subtitle}>Join Hackatweet today.</h2>
          <div className={styles.signup} onClick={() => setModalSignup(true)}>
            <a>Sign up</a>
          </div>
          <p className={styles.already}>Already have an account?</p>
          <div className={styles.signin} onClick={() => setModalSignin(true)}>
            <a>Sign in</a>
          </div>
        </div>
      </div>

      {/* modal signup*/}
      {modalSignup && (
        <div className={styles.modalsignup}>
          <div className={styles.modalsignupcontainer}>
            <div className={styles.close}>
              <a
                className={styles.closebutton}
                onClick={() => setModalSignup(false)}
              >
                x
              </a>
            </div>
            <Image src={"/logo.png"} alt="" width={100} height={100} />
            <h2>Create your Hackatweet account</h2>
            <div className={styles.signupform}>
              <input
                className={styles.input}
                type="text"
                placeholder="Firstname"
              />
              <input
                className={styles.input}
                type="text"
                placeholder="Username"
              />
              <input
                className={styles.input}
                type="password"
                placeholder="password"
              />
              <button>Sign up</button>
            </div>
          </div>
        </div>
      )}

      {/* modal signin*/}
      {modalSignin && (
        <div className={styles.modalsignup}>
          <div className={styles.modalsignupcontainer}>
            <div className={styles.close}>
              <a
                className={styles.closebutton}
                onClick={() => setModalSignin(false)}
              >
                x
              </a>
            </div>
            <Image src={"/logo.png"} alt="" width={100} height={100} />
            <h2>Connect to Hackatweet</h2>
            <div className={styles.signupform}>
              <input
                className={styles.input}
                type="text"
                placeholder="Username"
              />
              <input
                className={styles.input}
                type="password"
                placeholder="password"
              />
              <button>Sign in</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
