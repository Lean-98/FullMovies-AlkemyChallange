import '../css/navbar.css'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import Search from './Search'

export default function Navbar(props) {
  const location = useLocation()
  const navigate = useNavigate()

  const onLogout = () => {
    sessionStorage.clear()
    navigate('/')
  }

  return (
    <>
      {location.pathname !== '/' && (
        <nav className='navbar navbar-expand-md navbar-dark bg-dark p-2'>
          <div className='container-fluid'>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id='navbarNav'>
              <span className='navbar-brand'>
                <img
                  src='https://res.cloudinary.com/ddiulrst8/image/upload/v1700058416/gis1v6i7bmerwu9xkg36.png'
                  alt='Logo'
                  width='60'
                  height='60'
                  className='d-inline-block'
                />
                MoviesFull
              </span>

              <div className='navbar-collapse'>
                <div className='navbar-nav me-auto mb-2 mb-lg-0'>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'nav-link active' : 'nav-link'
                    }
                    to='/list'>
                    Top Rated
                  </NavLink>

                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'nav-link active' : 'nav-link'
                    }
                    to='/favorite'>
                    Favorites
                  </NavLink>

                  <li className='nav-item d-flex align-items-center'>
                    <span className='text-center text-primary '>
                      {props.favorites.length > 0 && (
                        <>🔝Movies: {props.favorites.length}</>
                      )}
                    </span>
                  </li>

                  <NavLink
                    className='nav-item nav-link text-warning'
                    onClick={onLogout}
                    to='/'>
                    Logout
                  </NavLink>
                </div>
              </div>
              <Search />
            </div>
          </div>
        </nav>
      )}
    </>
  )
}
