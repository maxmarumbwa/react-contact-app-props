import React from "react";
import ReactDOM from "react-dom";
import contacts from "./contacts";

function Card() {
        return (
                <div>
                        <div>
                                <div className="card">
                                        <div className="top">
                                                <h2>{contacts[0].name}</h2>
                                                <img
                                                        src={contacts[0].imgURL}
                                                        alt="avatar_img"
                                                />
                                        </div>
                                        <div className="bottom">
                                                <p>{contacts[0].phone}</p>
                                                <p>{contacts[0].email}</p>
                                        </div>
                                </div>
                        </div>

                        <div>
                                <div className="card">
                                        <div className="top">
                                                <h2>{contacts[1].name}</h2>
                                                <img
                                                        src={contacts[1].imgURL}
                                                        alt="avatar_img"
                                                />
                                        </div>
                                        <div className="bottom">
                                                <p>{contacts[1].phone}</p>
                                                <p>{contacts[1].email}</p>
                                        </div>
                                </div>
                        </div>
                        <div>
                                <div className="card">
                                        <div className="top">
                                                <h2>{contacts[2].name}</h2>
                                                <img
                                                        src={contacts[2].imgURL}
                                                        alt="avatar_img"
                                                />
                                        </div>
                                        <div className="bottom">
                                                <p>{contacts[2].phone}</p>
                                                <p>{contacts[2].email}</p>
                                        </div>
                                </div>
                        </div>
                </div>
        )
};
export default Card;