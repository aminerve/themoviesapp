import React, { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?t=${text}&apikey=a8a7d5a7`
        );
        const data = await res.json();
        setMovies(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieData();
  }, [text]);

  const searchByName = async () => {
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?t=${text}&apikey=a8a7d5a7`
      );

      if (!res.ok) throw new Error("Could not find Movie");

      const data = await res.json();

      if (data && data.Search){
             setMovies(data); 
      } else {
        setMovies([])
      }

    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = (e) => {
    if (e.key === 'enter'){
    e.preventDefault();

    searchByName();     
    }

  };
  return (
    <div>
      <h1>AllAboutThatMovie.com</h1>
      <form>
        <input
          type="text"
          placeholder="Search your favorite movies!"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleSubmit}
        />
      </form>
        <>
      {/* Running into error: movies.map is not a function.
          Solution: 
      */}
        {movies.map((movie, idx)=> (
            <div key={idx} className='grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 my-10 lg:my-20'>
            <h6>{movie.title}</h6>
            </div>
        ))}
      </>

    </div>
  );
}
