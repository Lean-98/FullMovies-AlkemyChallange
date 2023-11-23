import { NavLink } from 'react-router-dom'
import useMoviesResults from '../hooks/useMoviesResults'
import { MdOutlineFavorite } from 'react-icons/md'

export default function SearchResultsPage(props) {
  const { resultsMovies } = useMoviesResults()

  return (
    <>
      {resultsMovies.length === 0 && (
        <em>
          <span className='text-danger'>No movie has been found!</span>
        </em>
      )}
      <div className='row'>
        {resultsMovies.map(movie => {
          return (
            <div
              className='col-auto col-sm-6 col-md-5 col-lg-4 col-xl-3'
              key={movie.id}>
              <div className='card my-2'>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  className='img-fluid'
                  alt={movie.title}
                />
                <button
                  className='favorite-btn'
                  onClick={props.addOrRemoveFromFavs}
                  data-movie-id={movie.id}>
                  <MdOutlineFavorite className='icon' />
                </button>
                <div className='card-body'>
                  <div className='text-center shadow-lg p-3 mb-2 bg-body-tertiary rounded'>
                    <h5 className='card-title fw-bolder'>{movie.title}</h5>
                    <p className='card-text fw-light mt-2'>
                      {`${movie.overview.substring(0, 200)}...`}
                    </p>
                  </div>
                  <NavLink
                    to={`/detail?movieID=${movie.id}`}
                    className='btn btn-secondary'>
                    View detail
                  </NavLink>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
