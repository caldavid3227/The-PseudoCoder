import React from 'react';

import QuestionCard from './Questionnaire/QuestionCard';
import API from "../../models/API";

class question extends React.Component{

	constructor(props){
		super(props)

		this.state={
			key: 'q1',
			text: "",
			answer_q4: [],
			answer_q5: [],
			answer_q6: [],
			answer_q7: [],
			answer_q8: []
		}
		console.log(API)
		this.onNextCard=this.onNextCard.bind(this)
		this.onNextStep=this.onNextStep.bind(this)
    	this.handleInputChange=this.handleInputChange.bind(this)
    	this.handleFormSubmit=this.handleFormSubmit.bind(this)
	}

	onNextCard(nextNode){
		if(Array.isArray(this.state['answer_' + this.state.key])){
			this.setState({
				key: nextNode,
				['answer_' + this.state.key]: [...this.state['answer_' + this.state.key], this.state.text],
				text: ""
			})
		} else{
		this.setState({
		 key: nextNode, 
		 ['answer_' + this.state.key]: this.state.text,
		 text: ""
		})};
	};



	onNextStep(){
		this.setState({
		  ['answer_' + this.state.key]: [...this.state['answer_' + this.state.key], this.state.text],
		  text: ""
		})
	}


  loadAnswer(){
    API.getProject()
      .then(res =>
        this.setState({ project: res.data, answer: "" })
      )
      .catch(err => console.log(err));
  	};

  
	handleInputChange(event){
		console.log(event.target.name);
    const { answer, value } = event.target;
    this.setState({
      // [answer]: value
      text: value
    });
    console.log(this.state);
  };

  handleFormSubmit(event){
  	const { answer, value } = event.target;
      this.setState({
        answers: [this.state.answer_q1, this.state.answer_q2, this.state.answer_q3, this.state.answer_q4, this.state.answer_q5, this.state.answer_q6, this.state.answer_q7, this.state.answer_q8],
        text: value       
      })

        // .then(res => this.loadProject())
        // .catch(err => console.log(err));
  };
	
	renderSwitch(state){

		switch(state.key){
			case 'q1':
				return <QuestionCard 
					title={ "Hello and welcome to The PseudoCoder!" }
					label={ "Please, tell us what the name of your project is!" }
					onNext={ () => this.onNextCard('q2') } 
					handleInputChange={ this.handleInputChange}
					text={this.state.text}
				/> ;
			default:
				return 'q1';

			case 'q2':				
				return	<QuestionCard 
					title={ "Excellent!" }
					label={ "Now, Please explain the main goal of your code!" }
					onNext={ () => this.onNextCard('q3') } 
					handleInputChange={ this.handleInputChange}
					text={this.state.text}
				/>;
			

			case 'q3':				
				return	<QuestionCard 
					title={ "Wonderful!" }
					label={ "Please explain in plain english what you have to code to meet your goal!" }
					onNext={ () => this.onNextCard('q4') } 
					handleInputChange={ this.handleInputChange}
					text={this.state.text}
				/>;
			
			case 'q4':				
				
				return	<QuestionCard 
					title={ "Very Good!" }
					label={ "What are the bigger steps to completing your code?(This should be a small number of steps example: Construct UI, Populate database, Set up boiler plate, ect...) " }
					onNext={ () => this.onNextCard('q5') } 
					handleInputChange={ this.handleInputChange}
					text={this.state.text}
					nextStep={ this.onNextStep }
				/>;

			case 'q5':

				return  <QuestionCard
					title={ "Awesome!" }
					label={ "Now, break each step down into smaller steps" }
					onNext={ () => this.onNextCard('q6') }
					handleInputChange={ this.handleInputChange }
					text={ this.state.text }
					nextStep={ this.onNextStep }
					/>;

			case 'q6':				
				
				return	<QuestionCard 
					title={ "Great job so far!" }
					label={ "Now that we have a few high level steps and a few steps to complete each of those it's time to look at the different languages you will be dealing with. Please list all the languages and technologies you will need to use to finsish your project." }
					onNext={ () => this.onNextCard('q7') } 
					handleInputChange={ this.handleInputChange }
					text={ this.state.text }
					nextStep={ this.onNextStep }
				/>;

			case 'q7':				
				
				return	<QuestionCard 
					title={ "Wonderful, You're dooing great!" }
					label={ "It's time to really start breaking things down into steps. Take each of the languages and technologies you listen above and begin breaking them down into steps, you can do this by page or by general overview of what youll need to produce in each language." }
					onNext={ () => this.onNextCard('q8') } 
					handleInputChange={ this.handleInputChange }
					text={ this.state.text }
					nextStep={ this.onNextStep }
				/>;

			case 'q8':				
				
				return	<QuestionCard 
					title={ "" }
					label={ "Now that we have a few high level steps and a few steps to complete each of those it's time to look at the different languages you will be dealing with. Please list all the languages and technologies you will need to use to finsish your project." }
					onNext={ this.handleFormSubmit } 
					handleInputChange={ this.handleInputChange }
					text={ this.state.text }
					nextStep={ this.onNextStep }
				>


				</QuestionCard>;
	
			
		};
	};

	render(){

		return(
			<div>
				 {this.renderSwitch(this.state)}		
			</div>				
		);

	}
}



export default question