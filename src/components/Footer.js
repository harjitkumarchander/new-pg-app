import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div className="container-fluid bg-primary">
                <footer>
                    <div className="agileits-footer-bottom text-center">
				    <div className="w3-footer-logo"><h1><a><span className="text-success">P</span>PG</a></h1></div>
                    <ul 
                        className="list-unstyled d-flex text-white justify-content-around"
                        style={{marginBottom: '0rem'}}    
                    >
						<li><a><i className="fa fa-facebook" aria-hidden="true"></i><span>Facebook</span></a></li>
						<li><a><i className="fa fa-twitter" aria-hidden="true"></i><span>Twitter</span></a></li>
						<li><a><i className="fa fa-flickr" aria-hidden="true"></i><span>Flickr</span></a></li>
						<li><a><i className="fa fa-google-plus" aria-hidden="true"></i><span>Google+</span></a></li>
						<li><a><i className="fa fa-dribbble" aria-hidden="true"></i><span>Dribbble</span></a></li>
					</ul>
		            </div>
		        </footer>
            </div>
        )
    }
}
export default Footer;