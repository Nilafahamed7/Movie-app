import React, { useContext, useState } from 'react'
import Generefilter from '../components/Generefilter'
import { WatchListContext } from '../context/WatchListContext'
import Moviecard from '../components/Moviecard'

const Watchlist = () => {

const {watchlist,genrelist} = useContext(WatchListContext)

const [search,setsearch] = useState("")

const [selectedgenrelist,setselectedgenrelist] = useState("")

const filteredmovies = watchlist.filter
((movie)=>movie.title.toLowerCase()
.includes(search.toLowerCase()))
.filter((movie)=>{
  return !selectedgenrelist || movie.genre_ids.includes(Number(selectedgenrelist))
})

  return (
    <div className='p-4 pt-16'>
      <input onChange={(e)=>setsearch(e.target.value)} className='border border-gray-900 p-2 w-3/4 md:1/2 bg-gray-900 bg-opacity-60 backdrop-blur-md text-white fixed top-16 left-1/2 transform -translate-x-1/2 z-10' type='text' placeholder='Search Movies....'></input>

      <div className="mt-16 flex justify-center">
        <Generefilter genrelist={genrelist} setselectedgenrelist={setselectedgenrelist}/>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
                {filteredmovies.map((movie) => {
                    return (
                        <Moviecard key={movie.id} movie={movie} />
                    )
                })
                }
            </div>
    </div>
  )
}

export default Watchlist