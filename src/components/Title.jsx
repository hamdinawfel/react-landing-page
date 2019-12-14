import React from 'react';

export default function Title({name,title}){
    return (
   
        <div className="row">
            <div className="col-10 mx-auto m-5 text-center">
                <h1 className="text-capitalize font-weight-bold"style={{color:"#1a237e"}}>
                   <span>{name}</span> <span style={{color:":#2a2a72"}}>{title}</span>
                </h1>
            </div>
        </div>
    )
}

