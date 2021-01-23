import React from 'react';
import Button from './ActivityBuyButton'

function ActivityBuyButtonsBar() {

    return (
        <div className='activityButtonBar'>
            <Button btnText="1"/>
            <Button btnText="10"/>
            <Button btnText="100"/>
            <Button btnText="Max"/>
        </div>
    );
}

export default ActivityBuyButtonsBar;