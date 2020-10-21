import React from 'react';
import './App.css';

const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-sm-6 mt-5 pb-5">
                <div className="card shadow">
                    <img src={props.imgsrc} alt="Photo" alt="" />
                    <div className=" card-body">
                        <h6 className="text-secondary">{props.platform}</h6>
                        <h3 className=" text-dark">{props.showname}</h3>
                        <a href={props.linksrc} target="_blank">
                            <button className="btn btn-outline-secondary">Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;