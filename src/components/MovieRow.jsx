import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const MovieRow = ({ title, url }) => {
  const [movies, setMovies] = useState([]);
  const randomId = Math.floor(Math.random() * 1000)
useEffect(() => {
  axios
    .get(url)
    .then((response) => setMovies(response.data.results))
    .catch((error) => console.error("Error fetching movie data:", error));
}, [url]);

  const slide = (offset) => {
    const slider = document.getElementById(`slider`+ randomId);
    if (slider) {
      slider.scrollLeft += offset;
    }
  };
  return (
    <>
      <h2 className="font-Nsans-bold p-4 capitalize md:text-xl">{title}</h2>
      <div className="flex relative items-center group">
        <MdChevronLeft
          onClick={() => slide(-500)}
          size={40}
          className="bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-10 hidden
        group-hover:block cursor-pointer"
        />
        <div
          id={`slider` + randomId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((movie) => (
            <MovieItem movie={movie} key={movie.id} />
          ))}
        </div>
        <MdChevronRight
          onClick={() => slide(500)}
          size={40}
          className="bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden
        group-hover:block cursor-pointer"
        />
      </div>
    </>
  );
};

export default MovieRow;
