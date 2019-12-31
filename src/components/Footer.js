import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div style={{fontFamily:"Alfa Slab One"}}>
            {/* <div className="container-fluid bg-primary p-4">
                <footer>
                    <div style={{fontFamily:"Alfa Slab One"}} className="agileits-footer-bottom text-center ">
				    <div className="w3-footer-logo"><h1><a><span className="text-success">P</span>PG</a></h1></div>
                    <ul style={{marginBottom: '0rem', fontSize: "20px"}} className="list-unstyled d-flex text-primary justify-content-center ">
						<li style={{background: "white", width: "30px", height: "30px", borderRadius: "50%", margin: "5px"}}><a><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
						<li style={{background: "white", width: "30px", height: "30px", borderRadius: "50%", margin: "5px"}}><a><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
						<li style={{background: "white", width: "30px", height: "30px", borderRadius: "50%", margin: "5px"}}><a><i className="fa fa-flickr" aria-hidden="true"></i></a></li>
						<li style={{background: "white", width: "30px", height: "30px", borderRadius: "50%", margin: "5px"}}><a><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
						<li style={{background: "white", width: "30px", height: "30px", borderRadius: "50%", margin: "5px"}}><a><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
                        <li style={{background: "white", width: "30px", height: "30px", borderRadius: "50%", margin: "5px"}}><a><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
					</ul>
		            </div>
                    
		        </footer>
            </div> */}
<footer class="page-footer bg-primary text-white font-small mdb-color pt-4">

  <div class="container text-center text-md-left">

    <div class="row text-center text-md-left mt-3 pb-3">

      <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
        <h6 class="text-uppercase mb-4 font-weight-bold">Company name</h6>
        <p>In PG, we offer basic facilities like A.C., refrigerator, tv and etc. That means you do not have to spend money on purchasing the items. Also, PG will provide you the wifi, A.C., refrigerator, tv also which is missing in a flat.</p>
      </div>

      <hr class="w-100 clearfix d-md-none" />
      <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
        <p>
          <a className="text-white" href="#!">Perfact PG</a>
        </p>
        <p>
          <a className="text-white" href="#!">Perfact PG</a>
        </p>
        <p>
          <a className="text-white" href="#!">Perfact PG</a>
        </p>
        <p>
          <a className="text-white" href="#!">Perfact PG</a>
        </p>
      </div>
      <hr class="w-100 clearfix d-md-none" />
      <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 class="text-uppercase mb-4 font-weight-bold">Useful links</h6>
        <p>
          <a className="text-white" href="#!">Your Account</a>
        </p>
        <p>
          <a className="text-white" href="#!">Become an Affiliate</a>
        </p>
        <p>
          <a className="text-white" href="#!">Shipping Rates</a>
        </p>
        <p>
          <a className="text-white" href="#!">Help</a>
        </p>
      </div>
      <hr class="w-100 clearfix d-md-none" />
      <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
        <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
        <p>
          <i class="fa fa-home mr-3"></i>Jalandhar India</p>
        <p>
          <i class="fa fa-envelope mr-3"></i> info@gmail.com</p>
        <p>
          <i class="fa fa-phone mr-3"></i> +91 9876543210</p>
        <p>
          <i class="fa fa-print mr-3"></i> + 01 234 567 89</p>
      </div>
    </div>
    <hr />
    <div class="row d-flex align-items-center">
      <div class="col-md-7 col-lg-8">
        <p class="text-center text-md-left">© 2019 Copyright:   
          <a href="https://mdbootstrap.com/education/bootstrap/">
            <strong className="text-white">Perfact PG</strong>
          </a>
        </p>

      </div>
      <div class="col-md-5 col-lg-4 ml-lg-0">
        <div class="text-center text-md-right">
          <ul class="list-unstyled list-inline">
            <li class="list-inline-item">
              <a class="btn-floating btn-sm rgba-white-slight mx-1">
                <i class="fa fa-facebook-f"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn-floating btn-sm rgba-white-slight mx-1">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn-floating btn-sm rgba-white-slight mx-1">
                <i class="fa fa-google-plus-g"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn-floating btn-sm rgba-white-slight mx-1">
                <i class="fa fa-linkedin-in"></i>
              </a>
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