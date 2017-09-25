import React from 'react';


// eslint-disable-next-line 
const urlUsername = username => 'https://api.github.com/users/';
"https://maps.googleapis.com/maps/api/js?key=AIzaSyB3T-T-Y-G5pCPJsOaRQYjYwZFOCJ4toQA&libraries=places";

class Search extends React.Component {
	constructor(props) {
		super(props) 
			this.state = {}
	}

	componentDidMount() {
		fetch(urlUsername(this.props.username))
		.then(response => {
			if(!response.ok) 
				throw Error("Network request failed");
			return response;
		})
		.then(d => d.json())
		.then(d => {
			this.setState({
				githubData : d
			})
		}, () => {
			this.setState({
				requestFailed: true
			})
		})
	}


	render() {
		if(!this.state.githubData) return <p>loading...</p>
		if(!this.state.requestFailed) return <p>Failed</p>
			console.log(this.state.githubData);
		return (
			<div>
				<h2>{this.state.githubData.login}</h2>
			</div>
		)
	}
}

export default Search;