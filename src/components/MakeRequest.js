import React, { Component } from 'react';
import GameBoard from './GameBoard';
import '../style/style.css';
import axios from 'axios';

class MakeRequest extends Component {
	state = {
		urls: []
	};

	onClick = async (e) => {
		e.preventDefault();

		await axios
			.get(`https://api.unsplash.com/search/photos`, {
				params: {
					query: 'people',
					page: '1',
					per_page: '24',
					orientation: 'squarish'
				},
				headers: {
					Authorization: 'Client-ID hWxI9JoKVNOGLNWErte_lj6NeVdZVygSeRrF-T0AMfc'
				}
			})
			.then((res) => {
				const results = res.data.results;

				let urlObject = {};
				for (let image of results) {
					urlObject = { src: image.urls.small, id: image.id };

					const urls = [ ...this.state.urls ];
					urls.push(urlObject);
					this.setState({ urls });
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	render() {
		return (
			<div className="flex-container">
				<button className="game-btn" onClick={this.onClick}>
					Play Game
				</button>
				<GameBoard urls={this.state.urls} />
			</div>
		);
	}
}

export default MakeRequest;
