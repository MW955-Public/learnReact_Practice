import React from 'react'
import classes from '../Robot/Robot.module.css'
import RobotSkin from './RobotSkin/RobotSkin'
const robot = (props) => {
    return (
        <div className={classes.Robot}>
            <RobotSkin type="skin1" />

        </div>
        
        
    );
};

export default robot;