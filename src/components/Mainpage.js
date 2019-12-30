import React, { Component } from 'react';
import "../css/Main_container.css"
import Topbar from './Topbar';
import Slider from './Slider';
import Search from './Search';
import Popularcities from './Popularcities';
import Services from './Services';
import Coments from './Coments';
import Footer from './Footer';

class Mainpage extends Component {
    render() {
        return (
            <>
                <div className="main_container">
                </div>
                <Topbar />
                <hr className="pt-5" />
                <Search />
                <hr className=""/>
                <Slider />
                <h1 className="text-center pt-5">Popular Cities</h1>
                <hr className="w-25 mx-auto pt-25 " />
                <Popularcities />
                <h1 className="text-center pt-5">Comments</h1>
                <hr className="w-25 mx-auto pt-25 " />
                <Coments />
                <h1 className="text-center pt-5">Services</h1>
                <hr className="w-25 mx-auto pt-25 " />
                <Services />

                <Footer />
            </>
        )
    }
}
export default Mainpage;