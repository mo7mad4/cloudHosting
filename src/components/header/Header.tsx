import Link from 'next/link'
import { GrTechnology } from "react-icons/gr";
import styles from './header.module.css'
import React from 'react'

const Header = () => {
  return (
    <header className={styles.header}>
       

        <div className={styles.right}>
                <Link className={styles.btn} href="/login">Login</Link>
                <Link className={styles.btn} href="/register">Register</Link>
        </div>

    </header>
  )
}

export default Header