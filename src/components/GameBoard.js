import React, { Component } from 'react';
import '../style/style.css';

class GameBoard extends Component {
	render() {
		const { urls } = this.props;
		return (
			<div className="flex-container">
				{urls.map((url) => (
					<div key={url.id} className="flex-item flip-card-back">
						<img src={url.src} alt="image" />
					</div>
				))}
			</div>
		);
	}
}

export default GameBoard;
