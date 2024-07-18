import React, { Component } from 'react'
import './Skills.css'
import SkillsContainerCollection from './SkillsContainerCollection'

class Skills extends Component {
	displayName = Skills.name

	render() {

		return (
			<div className="Skills">
				<SkillsContainerCollection />
			</div>
		)
	}
}

export default Skills;