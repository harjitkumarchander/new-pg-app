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
import WhyUse from './WhyUse';
// import ChatBox from './ChatBox';

class Mainpage extends Component {
    render() {
        return (
            <div style={{fontFamily:"Alfa Slab One"}}>
                <div className="main_container">
                </div>
                <Topbar />
                {/* <hr className="pt-1" /> */}
                <br />
                <br />
                <Search />
                <br /><br />
                {/* <hr className=""/> */}
                <Slider />
                <h1 className="text-center pt-5">Top Most PG in Jalandhar</h1>
                <hr className="w-25 mx-auto pt-25 " />
                <Toppg />
                <h1 className="text-center pt-5">Popular Cities</h1>
                <hr className="w-25 mx-auto pt-25 " />
                <Popularcities />
                <h1 className="text-center pt-5">Why use Perfact PG</h1>
                <hr className="w-25 mx-auto pt-25 " />
                <WhyUse />
                <h1 className="text-center pt-5">Comments</h1>
                <hr className="w-25 mx-auto pt-25 " />
                <Coments />

                
                <h1 className="text-center pt-5">Services</h1>
                <hr className="w-25 mx-auto pt-25 " />
                <Services />
                {/* <ChatBox /> */}
                <Footer />
            </div>
        )
    }
}
export default Mainpage;