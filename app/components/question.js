import React from 'react';

import QuestionCard from './Questionnaire/QuestionCard';
import API from "../API";

class question extends React.Component{

	constructor(props){
		super(props)

		this.state={
			key: 'q1',
			text: "",
			answer_q1: []
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

  handleFormSubmit(){
      API.saveProject({
        answers: [this.state.answer_q1, this.state.answer_q2, this.state.answer_q3, this.state.answer_q4, this.state.answer_q5]
      })
        .then(res => this.loadProject())
        .catch(err => console.log(err));
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
					nextStep={ this.onNextStep }
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
					title={ "Wonderful!" }
					label={ "Please explain in plain english what you have to code to meet your goal!" }
					onNext={ () => this.onNextCard('q5') } 
					handleInputChange={ this.handleInputChange}
					text={this.state.text}
				/>;	
			

			case 'q5':				
				
				return	<QuestionCard 
					title={ "Very Good!" }
					label={ "What are the bigger steps to completing your code?(This should be a small number of steps example: Construct UI, Populate database, Set up boiler plate, ect...) " }
					onNext={ this.handleFormSubmit } 
					handleInputChange={ this.handleInputChange}
					text={this.state.text}
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