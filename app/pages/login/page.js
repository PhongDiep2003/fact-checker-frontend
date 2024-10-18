"use client";

import styles from '../../styles/signup.module.css'; // Reuse signup styles

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <div className={styles.projectInfo}>
          <h1 className={styles.appName}>Fact Checker</h1>
          <p className={styles.mission}>
            Empowering users with accurate information by automatically fact-checking speeches, articles, and videos.
          </p>
          <h2 className={styles.sectionHeader}>What Does This App Do?</h2>
          <ul className={styles.featuresList}>
            <li>Real-time Fact-Checking of videos, speeches, and articles.</li>
            <li>Cross-references claims with reliable sources to validate them.</li>
            <li>Provides links to sources that prove or disprove claims.</li>
            <li>Works across multiple domains: politics, science, health, and more.</li>
          </ul>
          <h2 className={styles.sectionHeader}>Cool Features</h2>
          <ul className={styles.featuresList}>
            <li>Supports multiple platforms: YouTube, websites, PDFs, and more.</li>
            <li>Continuously updated with the latest information.</li>
          </ul>
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
