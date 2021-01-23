import React from 'react';
import ProgressBar from './ProgressBar';
import ButtonsBar from './ActivityBuyButtonsBar';

function ActivityDashboard() {

    return (
        <div className='activityDashboard'>
            <ProgressBar/>
            <h1>Activity name</h1>
            <h2>Next goal: 25 activities</h2>
            <ButtonsBar/>
        </div>
    );
}

export default ActivityDashboard;