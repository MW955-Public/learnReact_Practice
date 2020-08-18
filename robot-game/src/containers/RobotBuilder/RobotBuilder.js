import React, { Component } from "react";
import Aux from '../../hoc/myAux';
import Robot from '../../components/Robot/Robot'
class RobotBuilder extends Component {
	/*constructor(prop{ s) {
		super(this.props);
		this.state = {

        }
    }*/
	state = {
		skins: {
			skin1: 0,
			skin2: 0,
        }
    }
	render(){
		return (
			<Aux>
				<Robot skins={this.state.skins} />
				<div>Robot Builder</div>
			</Aux>
			
		);
	}
}

export default RobotBuilder;