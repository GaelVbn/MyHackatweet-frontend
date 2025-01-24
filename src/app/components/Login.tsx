"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/login.module.css";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const Login = () => {
  const [modalSignup, setModalSignup] = useState(false);
  const [modalSignin, setModalSignin] = useState(false);
  const [eye, setEye] = useState(false);

  const [formSignup, setFormSignup] = useState({
    firstname: "",
    username: "",
    password: "",
  });

  const [formSignin, setFormSignin] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (modalSignup || modalSignin) {
      setFormSignup({
        firstname: "",
        username: "",
        password: "",
      });
      setFormSignin({
        username: "",
        password: "",
      });

      setEye(false);
    }
  }, [modalSignup, modalSignin]);

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
                value={formSignup.firstname}
                onChange={(e) =>
                  setFormSignup({ ...formSignup, firstname: e.target.value })
                }
              />
              <input
                className={styles.input}
                type="text"
                placeholder="Username"
                value={formSignup.username}
                onChange={(e) =>
                  setFormSignup({ ...formSignup, username: e.target.value })
                }
              />

              <input
                className={styles.input}
                type={eye ? "text" : "password"}
                placeholder="password"
                value={formSignup.password}
                onChange={(e) =>
                  setFormSignup({ ...formSignup, password: e.target.value })
                }
              />

              {eye ? (
                <FaEye
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => setEye(!eye)}
                />
              ) : (
                <FaEyeSlash
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => setEye(!eye)}
                />
              )}

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
                value={formSignin.username}
                onChange={(e) =>
                  setFormSignin({ ...formSignin, username: e.target.value })
                }
              />
              <input
                className={styles.input}
                type="password"
                placeholder="password"
                value={formSignin.password}
                onChange={(e) =>
                  setFormSignin({ ...formSignin, password: e.target.value })
                }
              />
              {eye ? (
                <FaEye
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => setEye(!eye)}
                />
              ) : (
                <FaEyeSlash
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => setEye(!eye)}
                />
              )}
              <button>Sign in</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
