import React from 'react'

const Generefilter = ({genrelist,setselectedgenrelist}) => {
   return (
    <div>
          <select onChange={(e)=>setselectedgenrelist(e.target.value)} className='bg-gray-900 p-2 mb-4 text-white opacity-60 backdrop-blur-md rounded-lg border ' name="" id="">
              <option value="">All Genres</option>
            {
              genrelist.map((genre)=>{
                return(
                
                  <option key={genre} value={genre.id}>{genre.name}</option>
                )
              })
            }
           </select>
    </div>
  )
}

export default Generefilter