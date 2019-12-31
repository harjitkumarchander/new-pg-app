import React, { Component } from 'react';
import "../css/Main_container.css"
import Topbar from './Topbar';
import Slider from './Slider';
import Search from './Search';
import Popularcities from './Popularcities';
import Services from './Services';
import Coments from './Coments';
import Footer from './Footer';
import Toppg from './Toppg';

class Mainpage extends Component {
    render() {
        return (
            <div style={{fontFamily:"Alfa Slab One"}}>
                <div className="main_container">
                </div>
                <Topbar />
                <hr className="pt-1" />
                <Search />
                <hr className=""/>
                <Slider />
                <h1 className="text-center pt-5">Top Most PG in Jalandhar</h1>
                <hr className="w-25 mx-auto pt-25 " />
                <Toppg />
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
            </div>
        )
    }
}
export default Mainpage;