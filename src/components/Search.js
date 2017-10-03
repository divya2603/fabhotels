import React from 'react';
export default class Search extends React.Component
{
	constructor(props) {
    super(props);
    this.update = this.update.bind(this);
  }

  update(e) {
    this.props.updateState(e);
  }
	render() {
	   return(
	    <div>
	        <span>Search</span>
             <input onChange = {this.update} 
               ref = "myInput" onChange={this.update}/>
	    </div>
	   );
	}
}