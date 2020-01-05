import React, { Component } from 'react'
import { element } from 'prop-types'

export default class AddPost extends Component {

  
    state ={
        title: '',
        image: "",
        info: '',
        bgc: "white"
    }

    validTitle = (char) =>{
        // console.log("works");
        // console.log(char.target.value)
        if (char.target.value.length > 5){
            this.setState({title:char.target.value, bgc:'green'});
        }else{
            this.setState({bgc: 'white'});
        }
        
    }



    render() {
        return (
        <div className="container">
            <div className="card">
                <div className="row">
                    <div className="col-6 offset-3">
                        <h1>Add Post</h1>
                        <label for="name">Title</label>
                        { <input onChange = {this.validTitle} style={{backgroundColor: this.state.bgc}} placeholder = "Title" className="addPostInput" /> /*this makes sure that it will take the function in the class and not in the function render */}
                        <label for="name">Info</label>
                        <input placeholder = "Info" className="addPostInput" />
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div> 
        </div>
        )
    }
}
