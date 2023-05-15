import React from "react";
import ContactCard from "../components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "../components/ContactForm";
const home=()=>{
return(
    <>
    <div className={styles.container}>
        <h1>Contact us</h1>
 <ContactCard/>
 <section className={styles.contact_section}>
<h2>We`d love to here <span> from you</span></h2>
 <ContactForm/>
 </section>
 </div>
    </>
)
}

export default home