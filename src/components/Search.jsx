import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Search() {
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    setKeyword('')
    e.target.reset()
    navigate(`/search?keyword=${keyword}`)
  }
  return (
    <>
      <form className='d-flex' role='search' onSubmit={handleSubmit}>
        <input
          className='form-control me-2'
          type='text'
          name='searchTerm'
          defaultValue={keyword}
          placeholder='Search'
          aria-label='Search'
          onChange={e => setKeyword(e.target.value)}
        />
        {/* {errors.search && (
                  <span className='alert alert-danger' role='alert'>
                    {errors.search.message}
                  </span>
        )} */}
        <button className='btn btn-outline-primary' type='submit'>
          Search
        </button>
      </form>
    </>
  )
}
