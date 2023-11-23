import { NavLink, Navigate } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import { BsCheckLg } from 'react-icons/bs'
import useDetailMovie from '../hooks/useDetailMovie'

export default function DetailPage() {
  const { oneMovie } = useDetailMovie()
  const token = sessionStorage.getItem('token')

  return (
    <>
      {!token && <Navigate to='/' />}
      {!oneMovie && <p>Loading...</p>}
      {oneMovie && (
        <>
          <div className='row'>
            <div className='col-4'>
              <img
                src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                className='card-img-top'
                alt={oneMovie.title}
              />
            </div>
            <div className='col-8'>
              <div className='card-body'>
                <h5 className='card-title fw-bolder mb-1'>{oneMovie.title}</h5>

                <p className='card-text fw-light'>
                  <span className='fw-semibold'>Description: </span>
                  {oneMovie.overview}
                </p>

                <u className='text-decoration-none list-unstyled'>
                  <h5 className='fw-semibold'>Genres:</h5>
                  {oneMovie.genres.map((oneGenres, idx) => (
                    <li key={idx}>
                      <BsCheckLg
                        style={{ color: '#2e86c1', marginRight: '2px' }}
                      />
                      {oneGenres.name}
                    </li>
                  ))}
                </u>

                <p className='card-text fw-light'>
                  <span className='fw-semibold'>Release date: </span>
                  {oneMovie.release_date}
                </p>

                <p className='card-text fw-light'>
                  <span className='fw-semibold'>Popularity: </span>
                  {Math.round(oneMovie.popularity / 1) + 'k'}
                </p>

                <p className='card-text fw-light'>
                  <span className='fw-semibold'>User score: </span>
                  {oneMovie.vote_average.toFixed(2)}
                  <FaStar
                    style={{
                      color: ' #f1c40f ',
                      marginBottom: '4px',
                      marginLeft: '2px',
                    }}
                  />
                </p>
              </div>
              <NavLink to='/list' className='btn btn-primary mt-2'>
                Return
              </NavLink>
            </div>
          </div>
        </>
      )}
    </>
  )
}
