import React, { Component } from "react";
import Aux from '../../hoc/myAux';
import Robot from '../../components/Robot/Robot'
class RobotBuilder extends Component {
	render(){
		return (
			<Aux>
				<Robot />
				<div>Robot Builder</div>
			</Aux>
			
		);
	}
}

export default RobotBuilder;