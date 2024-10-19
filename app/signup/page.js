"use client";

import Link from 'next/link';
import styles from '../styles/signup.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    try {
      const res = await fetch('http://localhost:3000/api/signup', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      
      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          router.push('/login')
        }
        alert(data.message)
      }
    }
    catch (error) {
      alert('An error occurred. Please try again.');
      console.error('Error signing up:', error);
    }
    finally {
      setEmail('');
      setPassword('');
      setConfirmPassword('');
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
            <input type="email" id="email" className={styles.input} value={email} required onChange={e => setEmail(e.target.value)} />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className={styles.input} value={password} required onChange={e => setPassword(e.target.value)}/>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" className={styles.input} value={confirmPassword} required onChange={e => setConfirmPassword(e.target.value)} />
          </div>
          <button type="submit" className={styles.button}>Sign up</button>
          <p className={styles.signInText}>
            Already a member?{' '}
            <Link href="/login" className={styles.signInLink}>
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
