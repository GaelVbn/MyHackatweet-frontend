"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/login.module.css";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FormSignup } from "../types/login";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/user";
import { useRouter } from "next/navigation";
import { urlProd } from "../../../urlProd";

export const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [modalSignup, setModalSignup] = useState(false);
  const [modalSignin, setModalSignin] = useState(false);
  const [eye, setEye] = useState(false);

  const [formSignup, setFormSignup] = useState<FormSignup>({
    firstname: "",
    username: "",
    password: "",
  });
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const { firstname, username, password } = formSignup;

    try {
      const res = await fetch(`${urlProd}/users/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstname, username, password }),
      });

      const data = await res.json();

      if (res.status === 422 || res.status === 400) {
        alert(data.error);
        return;
      }

      if (data) {
        dispatch(
          setUser({
            firstname: data.firstname,
            username: data.username,
            token: data.token,
          })
        );
        router.push("/homePage");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  const [formSignin, setFormSignin] = useState({
    username: "",
    password: "",
  });

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { username, password } = formSignin;

    if (!username || !password) {
      console.error("All fields are required");
      return;
    }

    try {
      const res = await fetch(`${urlProd}/users/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.status === 422 || res.status === 404) {
        console.error(data.error);
        alert(data.error);
        return;
      }

      if (data) {
        dispatch(
          setUser({
            firstname: data.firstname,
            username: data.username,
            token: data.token,
          })
        );
        router.push("/homePage");
      }
    } catch (error) {
      console.error("Error during signin:", error);
    }
  };

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
        <Image src={"/logo.png"} alt="" width={300} height={300} priority />
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
            <form className={styles.signupform}>
              <input
                className={styles.input}
                type="text"
                placeholder="Firstname"
                value={formSignup.firstname}
                required
                onChange={(e) =>
                  setFormSignup({ ...formSignup, firstname: e.target.value })
                }
              />
              <input
                className={styles.input}
                type="text"
                placeholder="Username"
                value={formSignup.username}
                required
                onChange={(e) =>
                  setFormSignup({ ...formSignup, username: e.target.value })
                }
              />

              <input
                className={styles.input}
                type={eye ? "text" : "password"}
                placeholder="password"
                value={formSignup.password}
                required
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

              <button onClick={handleSignup}>Sign up</button>
            </form>
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
            <form className={styles.signupform}>
              <input
                className={styles.input}
                type="text"
                placeholder="Username"
                autoComplete="username"
                value={formSignin.username}
                required
                onChange={(e) =>
                  setFormSignin({ ...formSignin, username: e.target.value })
                }
              />
              <input
                className={styles.input}
                type={eye ? "text" : "password"}
                placeholder="password"
                autoComplete="current-password"
                value={formSignin.password}
                required
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
              <button onClick={handleSignin}>Sign in</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
