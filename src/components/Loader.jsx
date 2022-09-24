import React from 'react'
import './Loader.css'
import DotLoader from 'react-spinners/DotLoader'

function Loader() {
  return (
    <div className="loader">
      <h4>Welcome to</h4>
      <h2>GithFind</h2>
      <h6 className='blink'>Find github users; search repositories</h6>
      <DotLoader className='loaderr' color="#36d7b7" />
    </div>
  )
}

export default Loader