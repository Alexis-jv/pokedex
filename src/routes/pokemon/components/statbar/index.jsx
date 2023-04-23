import { useState, useEffect } from "react";
import "./style.css";

export default function Statbar({label, min, max, value, color}) {
    return (
        <div className="Statbar">
            <p>{label}: {value}</p>
            <footer>
                <div className="bar"><div className={color} style={{width: `${(value-min)*100/(max-min)}%`}}></div></div>
                {/*<div>
                    <p>{min}</p>
                    <p>{max}</p>
                </div>*/}
            </footer>
        </div>
    )
}