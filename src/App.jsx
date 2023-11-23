import './css/bootstrap.min.css'
import './css/app.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoginPage from './pages/LoginPage'
import ListPage from './pages/ListPage'
import DetailPage from './pages/DetailPage'
import NotFoundPage from './pages/NotFoundPage'
import SearchResultsPage from './pages/SearchResultsPage'
import { FavoritePage } from './pages/FavoritePage'
import useFavoriteMovies from './hooks/useFavoriteMovies'

function App() {
  const { favorites, setFavorites } = useFavoriteMovies()

  const addOrRemoveFromFavs = e => {
    const favMovies = localStorage.getItem('favs')
    let tempMoviesInFavs

    if (favMovies === null) {
      tempMoviesInFavs = []
    } else {
      tempMoviesInFavs = JSON.parse(favMovies)
    }

    const btn = e.currentTarget
    const parent = btn.parentElement
    const imgUrl = parent.querySelector('img').getAttribute('src')
    const title = parent.querySelector('h5').innerText
    const overview = parent.querySelector('p').innerText
    // console.log(btn.dataset)
    const movieData = {
      id: btn.dataset['movieId'],
      title,
      imgUrl,
      overview,
    }

    let movieIsInArray = tempMoviesInFavs.find(oneMovie => {
      return oneMovie.id === movieData.id
    })

    if (!movieIsInArray) {
      tempMoviesInFavs.push(movieData)
      localStorage.setItem('favs', JSON.stringify(tempMoviesInFavs))
      setFavorites(tempMoviesInFavs)
      // console.log('add movie')
    } else {
      let moviesLeft = tempMoviesInFavs.filter(oneMovie => {
        return oneMovie.id !== movieData.id
      })
      localStorage.setItem('favs', JSON.stringify(moviesLeft))
      setFavorites(moviesLeft)
      // console.log('remove movie')
    }
  }

  return (
    <>
      <Navbar favorites={favorites} />
      <div className='container mt-3'>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route
            path='/list'
            element={<ListPage addOrRemoveFromFavs={addOrRemoveFromFavs} />}
          />
          <Route path='/detail' element={<DetailPage />} />
          <Route
            path='/search'
            element={
              <SearchResultsPage addOrRemoveFromFavs={addOrRemoveFromFavs} />
            }
          />
          <Route
            path='/favorite'
            element={
              <FavoritePage
                favorites={favorites}
                addOrRemoveFromFavs={addOrRemoveFromFavs}
              />
            }
          />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
