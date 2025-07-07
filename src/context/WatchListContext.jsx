import { createContext, useState,useEffect } from "react";

export const WatchListContext = createContext()

export const WatchListProvider = ({ children }) => {

    const [watchlist, setwatchlist] = useState([])

    const [genrelist, setgenrelist] = useState([])

    useEffect(() => {
        let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=f9a309991e17d8fabc4548fbbe19d947`
        fetch(url)
            .then((response) => response.json())
            .then((data) =>setgenrelist(data.genres || []))
    }, [])


    const toggleWatchList = (movie) => {

        const index = watchlist.findIndex((m) => m.id === movie.id)

        if (index === -1) {
            setwatchlist([...watchlist, movie])
        }
        else (
            setwatchlist([...watchlist.slice(0, index), ...watchlist.slice(index + 1)]) // doubt
        )

    }



    return (
        <WatchListContext.Provider value={{ watchlist, toggleWatchList,genrelist }}>
            {children} {/* doubt */}
        </WatchListContext.Provider>

    )
}