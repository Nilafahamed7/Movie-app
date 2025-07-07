import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { WatchListContext } from '../context/WatchListContext'

const Navbar = () => {

   const {watchlist}= useContext(WatchListContext)
    return (
        <nav className='flex justify-between bg-gray-900 text-white p-4 fixed w-full top-0 z-10'>
            <Link className=' text-xl font-semibold' to="/">Movie App</Link>
            <Link className=' text-xl' to="/watchlist">Watchlist({watchlist.length})</Link>
        </nav>

    )
}

export default Navbar