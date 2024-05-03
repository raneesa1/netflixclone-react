import React, { useEffect, useState } from "react";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { UserAuth } from "../context/AuthContext";
import { db } from "../services/fireBase";
import { createImageUrl } from "../services/movieService";
import { arrayRemove, doc, onSnapshot, updateDoc } from "firebase/firestore";

const Profile = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();
  const randomId = Math.floor(Math.random() * 1000);

  const handleUnlikeShow = async (movie) => {
    const userDoc = doc(db, "users", user.email);
    await updateDoc(userDoc, {
      favShows: arrayRemove(movie),
    });
  };
  useEffect(() => {
    if (user) {
      onSnapshot(doc(db, "users", `${user.email}`), (doc) => {
        if (doc.data()) setMovies(doc.data().favShows);
      });
    }
  }, [user?.email]);
  console.log(movies);
  if (!user) {
    return (
      <>
        <p className="items-center justify-center">fetching data...</p>
      </>
    );
  }
  const slide = (offset) => {
    const slider = document.getElementById(`slider` + randomId);
    if (slider) {
      slider.scrollLeft += offset;
    }
  };
  return (
    <div>
      <div>
        <img
          className="block h-[450px] object-cover w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[450px]" />
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-Nsans-bold my-2">
            My Shows
          </h1>
          <p className="text-gray-400 text-lg font-Nsans-light">{user.email}</p>
        </div>
      </div>
      <h2 className="font-Nsans-bold p-4 capitalize md:text-xl">
        {movies.title}
      </h2>
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
            <div
              key={movie.id}
              className="relative w-[130px] sm:w-[140px] lg:w-[200px] inline-block rounded-lg overflow-hidden cursor-pointer m-2"
            >
              <img
                className="h-40 w-full block object-cover object-top"
                src={createImageUrl(
                  movie.backdrop_path ?? movie.poster_path,
                  "w500"
                )}
                alt={movie.title}
              />
              <div className="absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100">
                <p className="whitespace-normal text-sm md:text-sm flex justify-center h-full font-Nsans-bold items-center">
                  {movie.title}
                </p>
                <p>
                  <AiOutlineClose
                    size={30}
                    className="absolute top-2 right-2"
                    onClick={() => handleUnlikeShow(movie)}
                  />
                </p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={() => slide(500)}
          size={40}
          className="bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden
        group-hover:block cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Profile;
