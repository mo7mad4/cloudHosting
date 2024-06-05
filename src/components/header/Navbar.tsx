"use client";
import Link from 'next/link'
import React, { useState } from 'react'

//style
import styles from './header.module.css'

// icons
import { GrTechnology } from 'react-icons/gr'
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";




const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div>
                <Link href="/" className={styles.logo}>
                    CLOUD
                    <GrTechnology />
                    HOSTING
                </Link>
                <div className={styles.menu}>
                    {
                        toggle
                            ?
                            <IoMdClose
                                onClick={() => setToggle(prev => !prev)} />
                            :
                            <AiOutlineMenu
                                onClick={() => setToggle(prev => !prev)}
                            />}

                </div>
            </div>
            <div
                className={styles.navLinksWrapper}
                style={{
                    clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)" || ""
                }}
            >
                <ul className={styles.navLinks}>
                    <Link className={styles.navLink} onClick={() => setToggle(false)} href="/">Home</Link>
                    <Link className={styles.navLink} onClick={() => setToggle(false)} href="/articles">Articles</Link>
                    <Link className={styles.navLink} onClick={() => setToggle(false)} href="/about">About</Link>
                    <Link className={styles.navLink} onClick={() => setToggle(false)} href="/admin">Admin Dashboard</Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar