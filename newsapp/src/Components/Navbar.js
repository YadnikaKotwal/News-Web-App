import React, { Component } from 'react'

export class Navbar extends Component {


    render() {
        return (
            <>
            <nav className="navbar fixed-top navbar-expand-lg navbartop" >
  <div id="mynav" className="container-fluid">
    <a id="myapp"className="navbar-brand" href="#">NewzApp</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul id="myl" className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Subscription</a>
        </li>
       </ul>
    </div>
  </div>
</nav>
</>
        )
    }
}
