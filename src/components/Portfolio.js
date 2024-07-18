import React, { Component } from 'react'
import './Portfolio.css'
import CaseStudyCollection from './CaseStudyCollection'

class Portfolio extends Component {
	displayName = Portfolio.name

	render() {

		return (
			<div className="Portfolio">
				<CaseStudyCollection />
			</div>
		)
	}
}

export default Portfolio;
