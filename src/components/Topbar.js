import React, { Component } from 'react'

class Topbar extends Component {
    render() {
        return (
            <>
               <header style={{marginBottom : "0rem", marginTop : "0rem"}}>
                    <nav style={{padding: "0rem 0rem"}} className="navbar navbar-expand-lg navbar-light bg-primary">
  <a className="navbar-brand"><img style={{width: "200px", height : "80px"}} src={require("../images/logo1.png")} alt="logo"></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul style={{marginBottom : "0rem", fontSize: "1.5rem",fontFamily:"Alfa Slab One"}} className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link text-white" href="#"><i className="fa fa-user" aria-hidden="true"></i>Login <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#"><i className="fa fa-user-plus" aria-hidden="true"></i>Register</a>
      </li>
    </ul>
  </div>
</nav>
                    </header> 
            </>
        )
    }
}
export default Topbar;