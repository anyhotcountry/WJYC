import React from "react";
import schedule from '../img/schedule.png';

const Schedule = () => (
    <div>
        <h2>Schedule</h2>
        <p className="lead">We normally meet at 6:15 on a Wednesday during school term times. Below is our latest schedule.</p>
        <img className="img-responsive center-block" src={schedule} alt="Schedule" />
    </div>
);

export default Schedule;