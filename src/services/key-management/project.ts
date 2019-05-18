import { http } from "../request"

export const PROJECT_LIST_URL = 'v1/api/project/el'

export const getProjects = async (url: string) => {
  try {
    const response = await http.get(url)
    return response.data.results
  } catch (err) {
    return false
  }
}

export const getProject = async (projectId: string) => {
  try {
    const response = await http.get(`v1/api/project/e/${projectId}`)
    return response.data
  } catch (err) {
    return false
  }
}
