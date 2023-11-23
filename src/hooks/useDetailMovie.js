import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useDetailMovie() {
  let query = new URLSearchParams(window.location.search)
  let movieID = query.get('movieID')

  const [oneMovie, setOneMovie] = useState(null)

  useEffect(() => {
    try {
      const endpoint = `${
        import.meta.env.VITE_API_URL
      }/movie/${movieID}?api_key=${import.meta.env.VITE_API_KEY}`
      axios.get(endpoint).then(res => {
        const movieData = res.data
        setOneMovie(movieData)
      })
    } catch (error) {
      throw new Error('movie could not be found')
    }
  }, [setOneMovie])

  return { oneMovie }
}
