import { useState, useEffect } from "react";
import "./style.css";

export default function statbar({label, min, max, value, color}) {
    return (
        <div className="Statbar">
            <p>{label}</p>
            <footer>
                <div className="bar"><div style={{width: `${(value-min)*100/(max-min)}%`, backgroundColor: color}}></div></div>
                <div>
                    <p>{min}</p>
                    <p>{max}</p>
                </div>
            </footer>
        </div>
    )
}