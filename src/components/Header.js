import React from 'react'

export default function Header() {
    // let num = 5;

    // const biggestNum = (x,y) => {
    //     if(x>y) {
    //         return x;
    //     }
    //     return y;
    // }

    return (
        <div >
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                <a class="navbar-brand" href="#">Lets Travel</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                    
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About us</a>
                        </li>
                    </ul>
                    </div>
               
                </div>
            </nav> 
        </div>
    )
}
