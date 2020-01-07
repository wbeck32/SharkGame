import React, { Component } from 'react';
import PageContainer from './src/components/PageContainer';

class App extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
		};
	}
	render ()
	{
		return (
			<div>
				<PageContainer />
			</div>
		);
	}
}
export default App;
