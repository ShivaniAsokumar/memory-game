import React, { Component } from 'react';
import '../style/style.css';
import ReactCardFlip from 'react-card-flip';

class GameBoard extends Component {
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

	handleClick(e) {
		e.preventDefault();
		this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
	}

	render() {
		const { urls } = this.props;
		return (
			<div className="flex-container">
				{urls.map((url) => (
					<ReactCardFlip
						key={url.id}
						isFlipped={this.state.isFlipped}
						flipDirection={this.state.flipDirection}
						flipSpeedBackToFront={this.state.flipSpeedBackToFront}
						flipSpeedFrontToBack={this.state.flipSpeedFrontToBack}>
						<div className="flex-item" onClick={this.handleClick}>
							<img
								src="https://images.unsplash.com/photo-1557034988-7177550fe7cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
								alt="front"
							/>
						</div>
						<div className="flex-item" onClick={this.handleClick}>
							<img src={url.src} alt="back" />
						</div>
					</ReactCardFlip>
				))}
			</div>
		);
	}
}

export default GameBoard;
