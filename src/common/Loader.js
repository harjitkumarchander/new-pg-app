import React from 'react';
// import '../css/Loader.css';
import '../css/Loader.css';

const Loader = (props) => {
    if(props.loader === true){
        return <img className="img-loader" src={require("../images/loader.gif")} alt="gifimage"></img>
    }else{
        return null;
    }
}
export default Loader;
