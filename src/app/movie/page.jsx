import Link from 'next/link'
import React from 'react'
import MovieCard from '../components/MovieCard';
import styles from "@/app/styles/common.module.css";
const movie = async () => {

  const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '053266da20msh45bdcbabc5e923dp1f9900jsn7ebe60fae729',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };


  const response = await fetch(url, options);
  const data = await response.json();
  const main_data=data.titles;
  // console.log("akash",result);
  return (
    <section className={styles.movieSection}>
      <div className={styles.container}>
        <h1>Series & Movies </h1>
        <div className={styles.card_section}>
        {
        main_data.map((curElem) => {
            return <MovieCard key={curElem.id} {...curElem} />
          })
        }
        </div>
      </div>  
    </section>
  )
}

export default movie
