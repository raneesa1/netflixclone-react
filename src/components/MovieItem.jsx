import React, { useState } from "react";
import { createImageUrl } from "../services/movieService";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import {doc,arrayUnion,updateDoc} from 'firebase/firestore'
import {db} from '../services/fireBase'
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import {MdChevronLeft , MdChevronRight} from 'react-icons/md'

const MovieItem = ({ movie }) => {
  const [like, setLike] = useState(false);
  const { title, backdrop_path, poster_path } = movie;
  const {user} = UserAuth()

  const markAsFav = async() =>{
    const userEmail = user?.email
    if(userEmail){
      const userDoc = doc(db,'users',userEmail)
      setLike(!like)
      await updateDoc(userDoc,{
        favShows:arrayUnion({...movie})
      })

    }else{
      <Navigate to={'/login'}/>
    }
  }

  return (
  
    <div
      className="relative w-[130px] sm:w-[140px] lg:w-[200px] inline-block
    rounded-lg overflow-hidden cursor-pointer m-2
    "
    >
      <img
        className="h-40 w-full block object-cover object-top"
        src={createImageUrl(backdrop_path ?? poster_path, "w500")}
        alt={movie.title}
      />
      <div className="absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100">
        <p className="whitespace-normal text-sm md:text-sm flex justify-center h-full font-Nsans-bold items-center">
          {movie.title}
        </p>
        <p className="cursor-pointer" onClick={markAsFav}>
          {like ? (
            <FaHeart
              className="absolute top-2 left-2 text-gray-300"
              size={20}
            />
          ) : (
            <FaRegHeart
              className="absolute top-2 left-2 text-gray-300"
              size={20}
            />
          )}
        </p>
      </div>
    </div>
  );
};

export default MovieItem;
