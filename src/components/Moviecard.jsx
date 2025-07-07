import React, { useContext } from 'react'
import {FaHeart,FaRegHeart} from "react-icons/fa"
import { WatchListContext } from '../context/WatchListContext'


const Moviecard = ({movie}) => {

  const {toggleWatchList,watchlist} = useContext(WatchListContext)

  console.log("list",watchlist)

  const selected = watchlist.some(m=>m.id === movie.id)

   return(
    <div className='bg-gray-700 p-4 rounded-lg shadow-md text-white relative  '>
        <img className='w-full p-3 h-80 object-contain rounded' src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${movie.poster_path}`} alt={movie.title} />
        <h1 className='text-xl mt-2 font-bold'>{movie.title}</h1>
        <p className='text-sm text-gray-400 mt-4'>{movie.release_date}</p>
        <button onClick={()=>toggleWatchList(movie)} 
        className='absolute top-2 right-2 text-xl text-red-500'>{selected ? <FaHeart/>:<FaRegHeart/>}</button>
    </div>
  )
}

export default Moviecard