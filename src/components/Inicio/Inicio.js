import React from "react";
import { Link } from "react-router-dom";
import './inicio.css';
import { data } from "./datos";
export default function Inicio(){
    
    return(
       <>
            <div className="hero">
                    Streak
                </div>
                <div className="mosaic-container">
                    {
                        data.map(x => {
                            return(
                                <Link className="card" to={'/test/' + x.link}>
                                    <h2>{x.title}</h2>
                                </Link>
                            )
                        })
                    }
            </div>
        </>
    )
}