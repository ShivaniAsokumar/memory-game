import React, { Component } from 'react';
import '../style/style.css';
import ReactCardFlip from 'react-card-flip';
import Card from './Card';
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

	handleClick = (e) => {
		e.preventDefault();
		this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
	};

	render() {
		const { urls } = this.props;
		return <div className="flex-container">{urls.map((url) => <Card src={url.src} id={url.id} />)}</div>;
	}
}

export default GameBoard;
