"use client";
import { useState } from 'react';
import styles from '../styles/signup.module.css';
import { useRouter } from 'next/navigation';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      
      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          localStorage.setItem('userId', data?.user?._id)
          router.push('/')
        }
        alert(data.message)
      }
    }
    catch (error) {
      alert('An error occurred. Please try again.');
      console.error('Error Loggin In: ', error);
    }
    finally {
      setEmail('');
      setPassword('');
    }
  }
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
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className={styles.input} value={email} onChange={e => setEmail(e.target.value)} required/>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className={styles.input} value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className={styles.button}>Login</button>
          <p className={styles.signInText}>
            New user?{' '}
            <a href="/signup" className={styles.signInLink}>
              Create account
            </a>
          </p>
          <p className={styles.signInText}>
            <a href="/" className={styles.signInLink}>
              Continue as guest
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
