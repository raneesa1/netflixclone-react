import axios from "axios";
import React, { useEffect, useState } from "react";
import endpoints, { createImageUrl } from "../services/movieService";

const Hero = () => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    axios.get(endpoints.popular).then((response) => {
      const movies = response.data.results;
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      setMovie(randomMovie);
    });
  }, []);
  const truncate = (str, length) => {
    if (!str) return "";
    return str.length > length ? str.slice(0,length) + '....' : str 
  };
  if (!movie) {
    return (
      <>
        <p>Fetching data...</p>
      </>
    );
  }
  const { title, backdrop_path, release_date, overview, poster_path } = movie;
  return (
    <div className="relative w-full  sm:h-[340px] h-[550px] lg:h-[550px] xxl:h-[850px] sm:mb-52  lg:mb-10">
      <div className="w-full h-full ">
        <div className="absolute w-full h-[450px] lg:h-[540px] bg-gradient-to-r from-black">
          <img
            className="w-full object-cover object-top h-full"
            src={createImageUrl(backdrop_path , "original")}
            alt={title}
          />
          <div className="absolute w-full top-[20%] lg:top-[35%] p-4 md:p-8 sm:p-3 sm:top-[16%] ">
            <h1 className="text-3xl md:text-6xl font-Nsans-bold ">{title}</h1>
            <div className="mt-8 mb-4">
              <button className="capitalize border text-black bg-gray-300 py-2 px-5  ">
                play
              </button>
              <button className="capitalize border border-gray-300 py-2 px-5 ml-4 ">
                watch late
              </button>
            </div>
            <p className="text-gray-400 text-sm">{release_date}</p>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
              {truncate(overview, 165)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
