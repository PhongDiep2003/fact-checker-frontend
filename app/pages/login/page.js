"use client";

import styles from '../../styles/signup.module.css';

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <div className={styles.projectInfo}>
          <h1 className={styles.appName}>Fact Checker</h1>
          <p className={styles.mission}>
            Empowering users with accurate information by automatically fact-checking speeches, articles, and videos.
          </p>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className={styles.input} />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className={styles.input} />
          </div>
          <button type="submit" className={styles.button}>Login</button>
          <p className={styles.signInText}>
            New user?{' '}
            <a href="/signup" className={styles.signInLink}>
              Create account
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
