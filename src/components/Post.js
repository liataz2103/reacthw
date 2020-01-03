import React from 'react'

export default function Post(props) {
    return (
        <div class="container  ">
            <div class="card">
                <div class = "row">
                    <div calss= "col-4 ">
                        <div class ="image">
                            <img class="card-img-top" src={props.image} alt="Card image"/>  
                        </div>
                    </div>
                    <div class="col-8"></div>
                        <div class ="text">
                            <h4>{props.title}</h4>
                            <p>{props.info}</p>
                            <button id="btn" >Delete</button>    
                        </div>
                    </div>
                </div>
            </div>
        
            
    )
}
