import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'

import { UserContext } from '../../contexts/contexts'

const ImageUploader = () => {
  const user = useContext(UserContext)

  const { register, handleSubmit } = useForm()

  const avatarSubmit = async (data) => {
    console.log(data)
    convertBase64(data.avatar[0]).then((base64) => {
      const userId = user.user_id
      // const newAvatar = editUserAvatar(base64, userId)
      // console.log(newAvatar)

      // return newAvatar
    })
  }

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result)
      }
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(avatarSubmit)}>
        <input type='file' name='avatar' {...register('avatar')} />
        <button className='button' type='submit'>
          Update Avatar
        </button>
      </form>
    </div>
  )
}

export default ImageUploader
