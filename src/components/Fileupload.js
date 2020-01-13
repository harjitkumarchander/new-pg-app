import React, { Component } from 'react';
export class Fileupload extends Component {
    constructor(){
        super();
        this.state = {
            img: '',
            username:''
        }
    }
    handleInputImage = (e) => {
        console.log(e.target.files);
        this.setState({
            img: e.target.files[0]
        })
    }
    uploadImge = () => {
        let fd = new FormData();
        fd.append('image', this.state.img);
        fd.append('username', this.state.username);
        fetch('',{
            method: 'P0ST',
            headers: {
                'Content-Type':'multipart/form-data'
            },
            body: fd
        })
        .then()
        .then()
        .catch()
    }
    render() {
        return (
            <div>
                <h3>Select Image for Upload</h3>
                    <input multiple  type="file" onChange={this.handleInputImage}/>
                <br />
                <button onClick={this.uploadImge}>Click to Upload</button>
            </div>
        )
    }
}
export default Fileupload
