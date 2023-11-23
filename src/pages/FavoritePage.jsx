import { Navigate, NavLink } from 'react-router-dom'
import { MdOutlineFavorite } from 'react-icons/md'

export const FavoritePage = props => {
  let token = sessionStorage.getItem('token')
  return (
    <>
      {!token && <Navigate to='/' />}
      <div className='row'>
        <h2 className='text-center text-secondary-emphasis'>
          🔝Favorite Movies Section:
        </h2>

        {props.favorites.length === 0 && (
          <em>
            <span className='text-danger'>No movie has been found!</span>
          </em>
        )}

        {props.favorites.map(favorite => {
          return (
            <div
              className='col-auto col-sm-6 col-md-5 col-lg-4 col-xl-3'
              key={favorite.id}>
              <div className='card my-2'>
                <img
                  src={favorite.imgUrl}
                  className='img-fluid'
                  alt={favorite.title}
                />
                <button
                  className='favorite-btn'
                  onClick={props.addOrRemoveFromFavs}
                  data-movie-id={favorite.id}>
                  <MdOutlineFavorite
                    className={favorite.length !== 0 ? 'iconFav' : 'icon'}
                  />
                </button>
                <div className='card-body'>
                  <div className='text-center shadow-lg p-3 mb-2 bg-body-tertiary rounded'>
                    <h5 className='card-title fw-bolder'>{favorite.title}</h5>
                    <p className='card-text fw-light mt-2'>
                      {favorite.overview}
                    </p>
                  </div>
                  {/* <NavLink to='/list' className='btn btn-secondary'>
                    Back
                  </NavLink> */}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
