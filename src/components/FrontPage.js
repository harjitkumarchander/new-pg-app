import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import Topbar from './Topbar'

export class FrontPage extends Component {
    render() {
        return (
            <>
                <div className="front_container">
                    <div className="row p-0 m-0">
                        <img style={{width: "300px", height : "150px", position : "absolute", top: "20%", left : "40%"}} src={require("../images/logo1.png")} alt="logo"/>
                    </div>
                    <h1>Easiest way to Search PG and post your own PG</h1>

                    {/* <!--Navbar--> */}
<nav class="navbar navbar-light light-blue lighten-3">

  {/* <!-- Navbar brand --> */}
  <Link to="/" class="navbar-brand" href="#">Navbar</Link>

  {/* <!-- Collapse button --> */}
  <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
    aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span class="dark-blue-text"><i
        class="fas fa-bars fa-1x"></i></span></button>

  {/* <!-- Collapsible content --> */}
  <div class="collapse navbar-collapse" id="navbarSupportedContent1">

    {/* <!-- Links --> */}
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link to="/" class="nav-link" href="#">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link to="/" class="nav-link" href="#">Features</Link>
      </li>
      <li class="nav-item">
        <Link to="/" class="nav-link" href="#">Pricing</Link>
      </li>
    </ul>
    {/* <!-- Links --> */}

  </div>
  {/* <!-- Collapsible content --> */}

</nav>
{/* <!--/.Navbar--> */}
                </div>

            </>
        )
    }
}

export default FrontPage
