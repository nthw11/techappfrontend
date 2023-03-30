import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { UserContext } from '../../../contexts/contexts'
import { useNavigate } from 'react-router-dom'
import './Skills.css'
import { stringToBool } from '../../utility/stringToBool'
const API = process.env.REACT_APP_BACKEND_API

const AddSkills = () => {
  const user = useContext(UserContext)
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const addSkill = async (data) => {
    const newSkill = {
      skillName: data.skillName,
      skillRateFull: data.skillRateFull,
      skillRateHalf: data.skillRateHalf,
      skillNegotiable: stringToBool(data.skillNegotiable),
    }

    let tempSkillsArray = []
    tempSkillsArray.push(newSkill)
    if (user.skills.length > 0) {
      for (let skill of user.skills) {
        if (skill.skillName !== newSkill.skillName) {
          tempSkillsArray.push(skill)
        }
        user.skills = tempSkillsArray
      }
    } else {
      user.skills = tempSkillsArray
    }

    const config = {
      method: 'PUT',
      data: user.skills,
      url: `${API}/api/user/skills/${user.user_id}`,
    }

    await axios(config).then((response) => {
      console.log(response)
      user.skills = response.data.skills
      return navigate('/user')
    })
  }

  return (
    <div>
      <h1>Add your skills here</h1>
      <form onSubmit={handleSubmit(addSkill)}>
        <label>
          <p>Skills</p>
          <span>
            select a skill or add your own (hint: adding your own may make you
            less searchable){' '}
          </span>
          <input type='text' list='skills' {...register('skillName')} />
          <datalist id='skills'>
            <option value='Stagehand' />
            <option value='A1' />
            <option value='V1' />
            <option value='A2' />
            <option value='V2' />
            <option value='Camera Operator' />
            <option value='Live Stream Tech' />
            <option value='Breakout Tech' />
            <option value='Breakout Lead' />
            <option value='Lighting Director' />
            <option value='Project Manager' />
          </datalist>
        </label>
        <label>
          <p>How much for a full day?</p>
          <span>Enter a number</span>
          <input type='number' {...register('skillRateFull')} />
        </label>
        <label>
          <p>How much for a half day?</p>
          <span>Enter a number</span>
          <input type='number' {...register('skillRateHalf')} />
        </label>
        <label>
          <p>Is this price negotiable?</p>
          <span>No. This price is non-negotiable</span>
          <input
            {...register('skillNegotiable')}
            type='radio'
            value={false}
            defaultChecked
          />
          <span>Yes. This price is negotiable</span>
          <input {...register('skillNegotiable')} type='radio' value={true} />
        </label>
        <button type='submit' className='button'>
          Add Skill
        </button>
      </form>
    </div>
  )
}

export default AddSkills
