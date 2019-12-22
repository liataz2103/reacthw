import React from 'react'

export default function Body(props) {

    
    return (
        <div>
            <div class = "from-wrapper">
                <h1>Register</h1>
                <form class="create-post-form">
                    <div class="form-group">
                        <label for="name">Full Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Full Name"/>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="text" class="form-control" id="email" placeholder="Email Address"/>
                    </div>                    
                    <button class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
