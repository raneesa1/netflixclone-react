import React from "react";
import Hero from "../components/Hero";
import endpoints from "../services/movieService";
import MovieRow from "../components/MovieRow";



const Home = () => {
  return (
    <>
      <Hero />
      <div className="mt-0 md:mt-0 lg:mt-0 xl:mt-0">
        <MovieRow title="trending" url={endpoints.trending} />
        <MovieRow title="popular" url={endpoints.popular} />
        <MovieRow title="comedy" url={endpoints.comedy} />
        <MovieRow title="top rated" url={endpoints.topRated} />
        <MovieRow title="upcoming" url={endpoints.upcoming} />
        <MovieRow title="comedy" url={endpoints.comedy} />
        <MovieRow title="popular" url={endpoints.popular} />
      </div>
    </>
  );
};

export default Home;
