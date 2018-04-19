import React from 'react';

import QuestionCard from './Questionnaire/QuestionCard'

class question extends React.Component{

	constructor(props){
		super(props)

		this.state={
			key: 'q1'
		}

		this.onNextCard=this.onNextCard.bind(this)
    	this.handleInputChange=this.handleInputChange.bind(this)
	}

	onNextCard(nextNode){
		this.setState({
		 key: nextNode  
		})
	}

	

	/*componentDidMount(){
		this.loadProject();
	};*/


  loadAnswer(){
    API.getProject()
      .then(res =>
        this.setState({ project: res.data, answer: "" })
      )
      .catch(err => console.log(err));
  	};

  
  /*deleteAnswer(id){
    API.deleteProject(id)
      .then(res => this.loadProject())
      .catch(err => console.log(err));
  };*/

	handleInputChange(event){
		console.log(event);
    const { answer, value } = event.target;
    this.setState({
      [answer]: value
    });
  };

  handleFormSubmit(event){
    event.preventDefault();
    if (this.state.answer) {
      API.saveProject({
        answer: this.state.answer,
      })
        .then(res => this.loadProject())
        .catch(err => console.log(err));
    }
  };
	
	renderSwitch(state){

		switch(state.key){
			case 'q1':
				return <QuestionCard 
					title={ "Hello and welcome to The PseudoCoder!" }
					label={ "Please, tell us what the name of your project is!" }
					onNext={ () => this.onNextCard('q2') } 
					handleInputChange={ this.handleInputChange}
				/> ;
			default:
				return 'q1';

			case 'q2':				
				return	<QuestionCard 
					title={ "Excellent!" }
					label={ "Now, Please explain the main goal of your code!" }
					onNext={ () => this.onNextCard('q3') } 
					handleInputChange={ this.handleInputChange}
				/>;
			

			case 'q3':				
				return	<QuestionCard 
					title={ "Wonderful!" }
					label={ "Please explain in plain english what you have to code to meet your goal!" }
					onNext={ () => this.onNextCard('q4') } 
					handleInputChange={ this.handleInputChange}
				/>;
			

			case 'q4':				
				return	<QuestionCard 
					title={ "Wonderful!" }
					label={ "Please explain in plain english what you have to code to meet your goal!" }
					onNext={ () => this.onNextCard('q5') } 
					handleInputChange={ this.handleInputChange}
				/>;	
			

			case 'q5':				
				
				return	<QuestionCard 
					title={ "Very Good!" }
					label={ "What are the bigger steps to completing your code?(This should be a small number of steps example: Construct UI, Populate database, Set up boiler plate, ect...) " }
					onNext={ this.onNextCard } 
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