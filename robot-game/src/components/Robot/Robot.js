import React from 'react'
import classes from '../Robot/Robot.module.css'
import RobotSkin from './RobotSkin/RobotSkin'
const robot = (props) => {
     let transformaedSkins = Object.keys(props.skins)
        .map(igKey => {
            return [...Array(props.skins[igKey])].map((_, i) => {
                return <RobotSkin key={igKey + i} type={igKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformaedSkins.length === 0) {
        transformaedSkins = <p> Please start adding widget to the robot </p>;
    }
    return (
        <div className={classes.Robot}>
            <RobotSkin type="skin1" />
            {transformaedSkins};
     
        </div>
        
        
    );
};

export default robot;