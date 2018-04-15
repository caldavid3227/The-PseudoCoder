import React from 'react';

import QuestionCard from './Questionnaire/QuestionCard'

class question extends React.Component{

	constructor(props){
		super(props)

		this.state={
			key: null
		}

		this.onNextCard=this.onNextCard.bind(this)
	}

	onNextCard(){
		this.setState({
			key: "value"
		})
	}

	render(){

		return(
			<div>
				<p> {this.state.key} </p>
				<QuestionCard 
					title={ "Hello and welcome to The PseudoCoder!" }
					label={ "Please, tell us what the name of your project is!" }
					onNext={ this.onNextCard } 
				/>
				
				<QuestionCard 
					title={ "Wonderful!" }
					label={"Now, Please explain on a high level in plain english what you have to code to meet your goal!" }
					onNext={ this.onNextCard } 
				/>	
				
				<QuestionCard 
					title={ "" }
					label={ "" }
					onNext={ this.onNextCard } 
				>

					<div> meh </div>

				</QuestionCard>
				
			</div>				
		);

	}
}

// const mapStateToProps = (state) => {
//   return {
//     messages: state.messages
//   };
// };

// export default connect(mapStateToProps)(question);
export default question