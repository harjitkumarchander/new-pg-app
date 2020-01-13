import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div style={{fontFamily:"Alfa Slab One"}}>
<footer className="page-footer bg-primary text-white font-small mdb-color pt-4">

  <div className="container text-center text-md-left">

    <div className="row text-center text-md-left mt-3 pb-3">

      <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Company name</h6>
        <p>In PG, we offer basic facilities like A.C., refrigerator, tv and etc. That means you do not have to spend money on purchasing the items. Also, PG will provide you the wifi, A.C., refrigerator, tv also which is missing in a flat.</p>
      </div>

      <hr className="w-100 clearfix d-md-none" />
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
        <p>
          <Link to="/" className="text-white" href="#!">Perfact PG</Link>
        </p>
        <p>
          <Link to="/" className="text-white" href="#!">Perfact PG</Link>
        </p>
        <p>
          <Link to="/" className="text-white" href="#!">Perfact PG</Link>
        </p>
        <p>
          <Link to="/" className="text-white" href="#!">Perfact PG</Link>
        </p>
      </div>
      <hr className="w-100 clearfix d-md-none" />
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
        <p>
          <Link to="/" className="text-white" href="#!">Your Account</Link>
        </p>
        <p>
          <Link to="/" className="text-white" href="#!">Become an Affiliate</Link>
        </p>
        <p>
          <Link to="/" className="text-white" href="#!">Shipping Rates</Link>
        </p>
        <p>
          <Link to="/" className="text-white" href="#!">Help</Link>
        </p>
      </div>
      <hr className="w-100 clearfix d-md-none" />
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
        <p>
          <i className="fa fa-home mr-3"></i>Jalandhar India</p>
        <p>
          <i className="fa fa-envelope mr-3"></i> info@gmail.com</p>
        <p>
          <i className="fa fa-phone mr-3"></i> +91 9876543210</p>
        <p>
          <i className="fa fa-print mr-3"></i> + 01 234 567 89</p>
      </div>
    </div>
    <hr />
    <div className="row d-flex align-items-center">
      <div className="col-md-7 col-lg-8">
        <p className="text-center text-md-left">© 2020 Copyright:   
          <Link to="/" href="https://mdbootstrap.com/education/bootstrap/">
            <strong className="text-white">Perfact PG</strong>
          </Link>
        </p>

      </div>
      <div className="col-md-5 col-lg-4 ml-lg-0">
        <div className="text-center text-md-right">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              <Link to="/" className="btn-floating btn-sm rgba-white-slight mx-1">
                <i className="fa fa-facebook-f"></i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="/" className="btn-floating btn-sm rgba-white-slight mx-1">
                <i className="fa fa-twitter"></i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="/" className="btn-floating btn-sm rgba-white-slight mx-1">
                <i className="fa fa-google-plus"></i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="/" className="btn-floating btn-sm rgba-white-slight mx-1">
                <i className="fa fa-linkedin"></i>
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</footer>
</div>
/* <hr /> */
        );
    }
}
export default Footer;