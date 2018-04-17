import React from 'react';

import QuestionCard from './Questionnaire/QuestionCard'

class question extends React.Component{

	constructor(props){
		super(props)

		this.state={
			key: "q1"
		}

		this.onNextCard=this.onNextCard.bind(this)
	}

	onNextCard(param){
		this.setState({
		 key: param  
		})
	}

	render(){

		return(
			<div>
				<p> {this.state.key} </p>
				
				<QuestionCard 
					title={ "Hello and welcome to The PseudoCoder!" }
					label={ "Please, tell us what the name of your project is!" }
					onNext={ () => this.onNextCard("q2") } 
				/>
					
				<QuestionCard 
					title={ "Excellent!" }
					label={ "Now, Please explain the main goal of your code!" }
					onNext={ this.onNextCard } 
				/>	
				 
				<QuestionCard 
					title={ "Wonderful!" }
					label={ "Please explain in plain english what you have to code to meet your goal!" }
					onNext={ this.onNextCard } 
				/>	
				
				<QuestionCard 
					title={ "Very Good!" }
					label={ "What are the bigger steps to completing your code?(This should be a small number of steps example: Construct UI, Populate database, Set up boiler plate, ect...) " }
					onNext={ this.onNextCard } 
				>

				

				</QuestionCard>
				
			</div>				
		);

	}
}


export default question