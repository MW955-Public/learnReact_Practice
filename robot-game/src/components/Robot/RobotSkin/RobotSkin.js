import React from 'react';
import classes from '../RobotSkin/RobotSkin.module.css'
import PropTypes from 'prop-types'
import { Component } from 'react';

class RobotSkin extends Component  {
    render() {
        let skin = null;
        switch (this.props.type) {
            case ('skin1'):
                skin = <div className={classes.Skin1}>123</div>;
                break;
            case ('skin2'):
                skin = <div className={classes.Skin2}>123</div>;
                break;
            case ('skin3'):
                skin = <div className={classes.Skin3}>123</div>;
                break;
            default:
                skin = null;
        }
        return skin;
    }
        
    
}
RobotSkin.protoTypes = {
    type: PropTypes.string.isRequired
}
export default RobotSkin;