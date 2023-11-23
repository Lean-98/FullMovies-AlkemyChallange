import { useEffect, useState } from 'react'
import axios from 'axios'

export function useListMovies() {
  const [moviesList, setmoviesList] = useState([])

  useEffect(() => {
    try {
      const endpoint = `${
        import.meta.env.VITE_API_URL
      }/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}`
      axios.get(endpoint).then(res => {
        const apiData = res.data.results
        // console.log({ apiData })
        setmoviesList(apiData)
      })
    } catch (error) {
      throw new Error('Error searching top rated movies')
    }
  }, [setmoviesList])

  return { moviesList }
}

// function getMovies(moviesList) {
//   const movies = moviesList
//   return movies?.map(movie => ({
//     title: movie.title,
//     overview: movie.desc,
//     year: movie.release_date,
//     poster: movie.backdrop_path,
//     popularity: movie.popularity,
//     score_users: movie.vote_average,
//   }))
// }
