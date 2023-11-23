import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'

export default function useMoviesResults() {
  const [searchParams] = useSearchParams()
  // console.log(searchParams.get('keyword'))

  // Fetch the search results from the API
  const [resultsMovies, setResultsMovies] = useState([])
  useEffect(() => {
    const endpoint = `${import.meta.env.VITE_API_URL}/search/movie?api_key=${
      import.meta.env.VITE_API_KEY
    }&query=${searchParams.get('keyword')}`
    axios
      .get(endpoint)
      .then(res => {
        const moviesArray = res.data.results
        // console.log(moviesArray)
        setResultsMovies(moviesArray)
      })
      .catch(error => {
        console.error(error)
      })
  }, [searchParams])

  return { resultsMovies }
}
