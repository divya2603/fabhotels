import React from 'react';
import Single from './Single';


export default class SearchList extends React.Component
{
	
	render()
	{   
		var places,prod=this.props.filter.toLowerCase(),flag=0;
		if(true)
        {
        flag=0;
		places=this.props.searchList.map(place=>{
		if(prod.length<3||(place.name.toLowerCase()).indexOf(prod)>-1)
			{
			flag=1;
			return (
                 <Single
                 	placeName={this.props.place}
                    />
				);
			}
		})
		if(flag===0)
			return(
		        <b>Sorry name not found</b>
		    )
	}
		return (
                <div className="col-md-8">
                    <h3>Products</h3>
                    <div className="products-list">
                       <ul className="clearfix">
                         {places}
                       </ul>
                    </div>
                </div>
			);
	}
} 