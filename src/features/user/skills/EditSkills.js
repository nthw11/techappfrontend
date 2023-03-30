import React, { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { UserContext } from '../../../contexts/contexts'
import { useNavigate, useLocation } from 'react-router-dom'
import './Skills.css'
import { stringToBool } from '../../utility/stringToBool'
const API = process.env.REACT_APP_BACKEND_API

const EditSkills = () => {
  const location = useLocation()
  const { skill } = location.state
  const user = useContext(UserContext)
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const deleteHandler = () => {
    const skillToDelete = skill.skillName
    const filteredSkills = user.skills.filter(
      (skill) => skill.skillName !== skillToDelete
    )
    user.skills = filteredSkills
    updateSkills(user.skills)
  }

  const editHandler = (data) => {
    const newSkill = {
      skillName: data.skillName,
      skillRateFull: data.skillRateFull,
      skillRateHalf: data.skillRateHalf,
      skillNegotiable: stringToBool(data.skillNegotiable),
    }

    let tempSkillsArray = []
    tempSkillsArray.push(newSkill)
    for (let skill of user.skills) {
      if (skill.skillName !== newSkill.skillName) {
        tempSkillsArray.push(skill)
      }
      user.skills = tempSkillsArray
    }
    updateSkills(user.skills)
  }

  const updateSkills = async (skillsArrayToAPI) => {
    const config = {
      method: 'PUT',
      data: skillsArrayToAPI,
      url: `${API}/api/user/skills/${user.user_id}`,
    }

    await axios(config).then((response) => {
      console.log(response)
      return navigate('/user')
    })
    return
  }

  return (
    <div>
      <h1>Edit your skills here</h1>
      <form onSubmit={handleSubmit(editHandler)}>
        <label>
          <p>Skills</p>
          <span>
            select a skill or add your own (hint: adding your own may make you
            less searchable){' '}
          </span>
          <input
            type='text'
            list='skills'
            defaultValue={skill.skillName}
            {...register('skillName')}
          />
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
          <input
            type='number'
            defaultValue={skill.skillRateFull}
            {...register('skillRateFull')}
          />
        </label>
        <label>
          <p>How much for a half day?</p>
          <span>Enter a number</span>
          <input
            type='number'
            defaultValue={skill.skillRateHalf}
            {...register('skillRateHalf')}
          />
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
          Update Skill
        </button>
      </form>
      <button onClick={deleteHandler} className='button'>
        Delete Skill
      </button>
    </div>
  )
}

export default EditSkills
