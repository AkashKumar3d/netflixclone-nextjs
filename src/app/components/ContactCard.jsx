import React from 'react'
import  styles from "@/app/contact/contact.module.css"
import { MdEmail, MdForum, MdVoiceChat } from "react-icons/md";
import Link from 'next/link';   
const ContactCard = () => {
    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.grid_card}>
                        <i><MdEmail /></i>
                        <h2>Email</h2>
                        <p>Monday to friday expected </p>
                        <p className={styles.last_para}>response time: 72 hours</p>
                        <Link href={"/"}>Send Email</Link>
                    </div>
                    <div className={styles.grid_card}>
                        <i><MdVoiceChat /></i>
                        <h2>Live Chat</h2>
                        <p>Weakend: 9AM - 6PM ET </p>
                        <p className={styles.last_para}>Weakend: 9AM - 5PM ET</p>
                        <Link href={"/"}>Chat Now</Link>
                    </div>
                    <div className={styles.grid_card}>
                        <i><MdForum /></i>
                        <h2>Community Forum</h2>
                        <p>Monday to friday expected </p>
                        <p className={styles.last_para}>response time: 72 hours</p>
                        <Link href={"/"} className={styles.anchorLink}>Ask the community</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard
