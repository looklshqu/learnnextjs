import { useEffect, useState } from "react";
import Navigation from "../../components/navigation";
import Link from "next/link";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(API_URL);
  const json = response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {/* <Navigation /> */}
      {movies.map((movie) => (
        // <div key={movie.id}>
        //   <img src={movie.poster_path} alt={movie.title} />
        //   <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        // </div>
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
