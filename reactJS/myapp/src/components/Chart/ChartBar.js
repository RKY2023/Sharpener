import React from "react";

import './ChartBar.css';

const ChartBar = (props) => {
    let barFillHeight = '0%';
    console.log(props.maxValue);
    if(props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) +'%';
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
            </div> 
            <label className="chart-bar__label">{props.label}</label>
        </div>
    )
}

export default ChartBar;