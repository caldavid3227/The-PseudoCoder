import React from 'react';

export default function QuestionCard(props){



	return(
		<div className="grid-x grid-padding-x align-center">
			<div className="cell large-5">
				<div className="card text-center">

					<h3> { props.title } </h3>

						{ !!props.children ? 
							props.children : 
								<label>
  					 				{ props.label }
  									<textarea rows="4" placeholder="None" onChange={ props.handleInputChange } value={props.text}></textarea>
								</label>
							}
						{ props.nextStep == null ? <div></div> : <button className="hollow button" onClick={ props.nextStep }>New Step</button>}
					
						<button className="hollow button" onClick={ props.onNext }>Next</button>
				</div>
			</div>
		</div>
		

	);
}