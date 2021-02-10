import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import '../style/style.css';
class Card extends Component {
	// state = {
	// 	toggle: false
	// };
	// Instead of using props, construct state here.

	constructor() {
		super();
		this.state = {
			isFlipped: false,
			flipSpeedFrontToBack: 0.4,
			flipSpeedBackToFront: 0.4,
			flipDirection: 'horizontal'
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick = (e) => {
		e.preventDefault();
		this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
	};

	render() {
		const { src, id } = this.props;

		const { isFlipped, flipDirection, flipSpeedBackToFront, flipSpeedFrontToBack } = this.state;

		return (
			<ReactCardFlip
				key={id}
				isFlipped={isFlipped}
				flipDirection={flipDirection}
				flipSpeedBackToFront={flipSpeedBackToFront}
				flipSpeedFrontToBack={flipSpeedFrontToBack}>
				<div className="flex-item" onClick={this.handleClick}>
					<img
						src="https://images.unsplash.com/photo-1557034988-7177550fe7cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
						alt="front"
					/>
				</div>
				<div className="flex-item" onClick={this.handleClick}>
					<img src={src} alt="back" />
				</div>
			</ReactCardFlip>
		);
	}
}

export default Card;
