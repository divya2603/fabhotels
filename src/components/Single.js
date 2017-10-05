import React from 'react';

export default class Single extends React.Component
{
	render()
	{
		return(
			<li>
        {this.props.placeName}
      </li>

             
			);
	}
}