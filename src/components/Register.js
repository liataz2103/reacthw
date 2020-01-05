import React, { Component } from 'react'

export default class AddPost extends Component {

    state ={
        username: '',
        password: "",
        email: '',
        userBgc: "white",
        passwordBgc: "white",
        emailBgc: "white"
    }

    validUserName = (char) =>{
        if (char.target.value.length >= 6 && char.target.value.length<=8){
            this.setState({username:char.target.value, userBgc:'green'});
        }else{
            this.setState({userBgc: 'red'});
        }  
    }

    validPassword = (char) =>{
        if (char.target.value.length >= 7){
            this.setState({password:char.target.value, passwordBgc:'green'});
        }else if (char.target.value.length < 7){
            this.setState({passwordBgc: 'red'});
        }
        
    }

    validEmail = (char) =>{
        
        if (char.target.value[3]=='@'){
            this.setState({email:char.target.value, emailBgc:'green'});
            
        }else{
            this.setState({emailBgc: 'white'});
        }
        
    }

    submitCheck = () =>{
        if(this.state.userBgc == 'green' && this.state.passwordBgc == "green" && this.state.emailBgc == "green"){
            alert("success");
        }else{
            alert("please try again");
        }
    }

    
    render (){
        return(
            <div className="container">
                <div className = "card">
                    <div className="row">
                        <div className="col-6 offset-3">
                            <h1>Register</h1>
                            <label for="name">User Name</label>
                            { <input onChange = {this.validUserName} style={{backgroundColor: this.state.userBgc}} type="text" className="addPostInput" placeholder="User Name"  /> }
                            <label for="email">Password</label>
                            { <input onChange = {this.validPassword} style={{backgroundColor: this.state.passwordBgc}} type="text" className="addPostInput" placeholder="Password" />} 
                            <label for="email">Email Address</label>
                            { <input onChange = {this.validEmail} style={{backgroundColor: this.state.emailBgc}} id="email" type="text" className="addPostInput" placeholder="Email" /> }                 
                            {<button onClick = {this.submitCheck} className="btn btn-primary">Submit</button>}
                        </div>
                    </div>
                </div>        
            </div>

        )
    }      
}
