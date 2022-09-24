import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div className="navbar">
      <h2 onClick={() => window.location.reload()}>GithFind</h2>
      <div className="navbar__right">
         <h5>Serach for github users</h5>
      </div>
    </div>
  )
}

export default NavBar