'use client'
import React, { useState } from 'react'
import { Mulish } from 'next/font/google';
import styles from "../contact/contact.module.css";
const mulish = Mulish({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});
const ContactForm = () => {
    const [user, setuser] = useState({
        username: "",
        email: "",
        phone: "",
        message: ""
    })
    const [status, setstatus]=useState(null)
    console.log(user)
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setuser((prevuser) => ({ ...prevuser, [name]: value }))
        //   console.log(user)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch('/api/contact', {
                method: "POST",
                headers: { "Content_Type": "application/json" },
                body: JSON.stringify({
                    username: user.username,
                    email: user.email,
                    phone: user.phone,
                    message: user.message,
                })
            })
            if (response.status==200) {
                setuser({
                    username:"",
                    email:"",
                    phone:"",
                    message:""
                })
            } else {
                setstatus(error)
            }
        } catch (error) {
            console.log("submitted fail ")
        }
    }

    return (
        <>
            <form className={styles.contact_form} onClick={handleSubmit}>
                <div className={styles.input_field}>
                    <label htmlFor='username' className={styles.label}>
                        Enter your name:
                        <input type="text" name='username' id='username' placeholder='Enter your name' className={mulish.className}
                            onChange={handleChange}
                            value={user.username}
                        />
                    </label>
                </div>

                <div className={styles.input_field}>
                    <label htmlFor='email' className={styles.label}>
                        Enter your email:
                        <input type="text" name='email' id='email' placeholder='Enter your email' className={mulish.className}
                            onChange={handleChange}
                            value={user.email}
                        />
                    </label>
                </div>

                <div className={styles.input_field}>
                    <label htmlFor='phone' className={styles.label}>
                        Enter your phone:
                        <input type="text" name='phone' id='phone' placeholder='Enter your phone' className={mulish.className}
                            onChange={handleChange}
                            value={user.phone}
                        />
                    </label>
                </div>

                <div className={styles.input_field}>
                    <label htmlFor='message' className={styles.label}>
                        Message:
                        <textarea type="text" name='message' id='message' rows={8} placeholder='message' className={mulish.className}
                            onChange={handleChange}
                            value={user.message}
                        />
                    </label>
                </div>

                <div>
                    {status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
                    {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>}

                    <button type='submit' className={mulish.className}>Send mesaage</button>
                </div>
            </form>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15083.289058970728!2d72.87362126604573!3d19.07155056411186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c89a5efa11d5%3A0x90728ea7729a78f9!2sKurla%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1684145600833!5m2!1sen!2sin" width={1800} height={450} style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </>
    )
}

export default ContactForm
