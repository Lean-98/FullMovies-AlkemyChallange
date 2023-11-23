import { useEffect, useState } from 'react'

export default function useFavoriteMovies() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const favsInLocal = localStorage.getItem('favs')

    if (favsInLocal !== null) {
      const favsArray = JSON.parse(favsInLocal)
      //   console.log(favsArray)
      setFavorites(favsArray)
    }
  }, [])

  return { favorites, setFavorites }
}
