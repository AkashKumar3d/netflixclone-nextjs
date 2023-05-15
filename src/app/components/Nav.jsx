import React from 'react'
import styles from "@/app/styles/navbar.module.css";
import Link from 'next/link';
const nav = () => {
  return (
<nav className={styles.navbar}>
  <div>
    <ul className={styles.navbarList}>
      <li className={styles.navbarItems}>
        <Link className={styles.navbarLink} rel="stylesheet" href="/" >Home</Link>
      </li>
      <li className={styles.navbarItems}>
        <Link className={styles.navbarLink} rel="stylesheet" href="/about" >About</Link>
      </li>
      <li className={styles.navbarItems}>
        <Link className={styles.navbarLink} rel="stylesheet" href="/movie" >Movie</Link>
      </li>
      <li className={styles.navbarItems}>
        <Link className={styles.navbarLink} rel="stylesheet" href="/contact" >Contact</Link>
      </li>
    </ul>
  </div>

</nav>
  )
}

export default nav
