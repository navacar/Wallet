import React from 'react';
import './GreenCircleFront.css';

const GreenCircleFront = () => {
    var Percent = 43.20;
    var StringPercent = String(Percent)
    var strokeDasharray = ", 100"

    return (
        <svg viewBox="0 0 36 36" class="green-circular-chart">
            <path class="green-circle"
                stroke-dasharray={StringPercent + strokeDasharray}
                d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
            />
        </svg>
    )

}

export default GreenCircleFront