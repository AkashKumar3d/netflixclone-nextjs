import React from 'react'
import Image from 'next/image';
import herostyle from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
import { Poppins } from 'next/font/google';
import Link from 'next/link';

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});
const Herosection = ({title, imageUrl}) => {
    return (
        <>
            <main className={herostyle.main_section}>
                <div className={styles.container}>
                    <div className={styles.grid_two_section}>
                        <div className={herostyle.hero_content}>
                            <h1>{title}</h1>
                            <p>From award-winning dramas to blockbuster action movies, we&apos;ve got you covered. Browse our selection of the latest and greatest movies, and find your new favorite today.</p>
                            <Link rel="stylesheet" href="/movie" >
                                <button className={poppins.className}>
                                    Explore Movie
                                </button>
                            </Link>
                        </div>
                        <div className={herostyle.hero_image}>
                            <Image src={imageUrl} alt="netflix image " height={500} width={500} />
                        </div>
                       
                    </div>
                    
                </div>
                <div className={herostyle['custom-shape-divider-bottom-1684136271']}>
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={ herostyle ["shape-fill"]}></path>
                        </svg>
                    </div>
            </main>
        </>
    )
}

export default Herosection
