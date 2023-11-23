import { useMemo } from 'react'

export default function Footer() {
  function getYear() {
    const today = useMemo(() => new Date())

    return today.getFullYear()
  }

  return (
    <footer className='footer d-flex justify-content-center mt-4 relative'>
      <div className='col-xs-12 col-md-4 order-2 order-md-1'>
        <div className='footer-copyright-wrapper text-center'>
          &copy; {getYear()} Copyright Alkemy Challenge
        </div>
        <div className='credits text-secondary text-center mt-2 fs-7'>
          Built by{' '}
          <a
            href='https://github.com/Lean-98'
            target='_blank'
            rel='noopener noreferrer'
            className='link-secondary text-decoration-none'>
            Leeo
          </a>{' '}
          with <span className='text-danger'>&#9829;</span>
        </div>
      </div>
    </footer>
  )
}
