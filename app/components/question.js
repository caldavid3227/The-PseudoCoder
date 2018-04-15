import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';

class question extends React.Component{

	render(){

		return(
			<div>
				<div className="grid-x grid-padding-x align-center">
					<div className="cell large-5">
						<div className="goal text-center">
							<h3>Hello and welcome to The PseudoCoder!</h3>
								<label>
  					 				Please, tell us what the main goal of your code is!
  								<textarea placeholder="None"></textarea>
								</label>
						</div>
					</div>
				</div>
				<div className="grid-x grid-padding-x align-center">
					<div className="cell large-5">
						<div className="explain text-center">
							<h3>Wonderful!</h3>
								<label>
									Now, Please explain on a high level in plain english what you have to code to meet your goal!
  								<textarea placeholder="None"></textarea>
								</label>			
						</div>
					</div>
				</div>
				<div className="grid-x grid-padding-x align-center">
					<div className="cell large-5">
						<div className="steps text-center">
							<h3>Now break it down into steps(these are still high level steps we'll break them down further try to keep it to as few steps as possible based on your answer above)</h3>
								<label>
  								<textarea placeholder="None"></textarea>
								</label>
						</div>
					</div>
				</div>
			</div>

			);

	}
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(question);
