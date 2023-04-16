import axios from 'axios'
const API = process.env.REACT_APP_BACKEND_API

export const ProjectDelete = (projectId, userId) => {
  const config = {
    method: 'DELETE',
    url: `${API}/api/project/delete/${projectId}`,
    data: userId,
  }
  axios(config)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
}

export default ProjectDelete
