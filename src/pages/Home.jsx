import React, { useEffect, useState } from 'react'
import Moviecard from '../components/Moviecard'

const Home = () => {

    const [movies, setmovies] = useState([])
    const [page, setpage] = useState(1)
    const [search, setsearch] = useState("")

   


    useEffect(() => {
         let url = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=f9a309991e17d8fabc4548fbbe19d947`
         if(search){
            url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=f9a309991e17d8fabc4548fbbe19d947`
         }
        fetch(url)
            .then((response) => response.json())
            .then((data) => setmovies(data.results))
    }, [page,search])

    return (
        <div className='p-4 pt-16'>
            <input onChange={(e)=>{
                setsearch(e.target.value)
            }} className='border border-gray-900 p-2 w-3/4 md:1/2 bg-gray-900 bg-opacity-60 backdrop-blur-md text-white fixed top-16 left-1/2 transform -translate-x-1/2 z-10' type='text' placeholder='Search Movies....'></input>
            <div className="movies-container"></div>
            <div className="pagination"></div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
                {movies.map((movie) => {
                    return (
                        <Moviecard key={movie.id} movie={movie} />
                    )
                })
                }
            </div>

            <div className="flex justify-between mt-6 ">
                <button disabled={page == 1} onClick={() => {
                    setpage((prev) => prev - 1)
                }} className='bg-gray-900 text-white px-2 py-1 rounded-lg'>Prev</button>

                <p className='text-xl font-medium bg-blue-400 p-2 text-white rounded'>Page no: {page}</p>
                
                <button onClick={() => {
                    setpage((prev) => prev + 1)
                }} className='bg-gray-900 text-white px-2 py-1 rounded-lg'>Next</button>
            </div>

        </div>

    )
}

export default Home