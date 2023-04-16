import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../contexts/contexts'
import './Skills.css'

const Skills = () => {
  const user = useContext(UserContext)
  const userType = user.userType

  const skills = user.skills

  return (
    <div className='skillsDiv'>
      <div className='skillsTable'>
        <h2>User Skills</h2>
        <div className='skillRow'>
          <h4>Skill</h4>
          <h4>Rate (full day)</h4>
          <h4>Rate (half day)</h4>
          <h4>Negotiable</h4>
          <h4>Edit</h4>
        </div>
        {skills.map((skill) => {
          const skillId = skill._id
          return (
            <div className='skillRow' key={skillId}>
              <p className='skillName'>{skill.skillName}</p>
              <p className='skillRate'>{skill.skillRateFull}</p>
              <p className='skillRate'>{skill.skillRateHalf}</p>
              <p className='skillNegotiable'>
                {skill.skillNegotiable ? 'true' : 'false'}
              </p>
              <Link to={`/user/skills/${skill._id}`} state={{ skill: skill }}>
                <p>e</p>
              </Link>
            </div>
          )
        })}
      </div>
      <button className='button'>
        <Link to='/user/skills'> Add Skills</Link>
      </button>
    </div>
  )
}

export default Skills
