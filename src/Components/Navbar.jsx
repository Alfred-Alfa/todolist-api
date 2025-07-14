import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        
        <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid bg-info">
    <Link class="navbar-brand" to="/">Todo App</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/search">Search</Link>
          </li>
            <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/delete">Delete</Link>
          </li>
                      <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/view">View all</Link>
          </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar