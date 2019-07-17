import React, { Component } from 'react';
import '../Assets/search.css';
class Search extends Component {
	render() {
		return (
			<div>
				<center>
					<input class="search" placeholder="Search Book ..." />
				</center>
			</div>
		);
	}
}
export default Search;