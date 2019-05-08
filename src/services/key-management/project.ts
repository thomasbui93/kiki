import { http } from "../request"

export const getProjects = async () => {
  try {
    const response = await http.get('v1/api/project/el')
    return response.data
  } catch (err) {
    return false
  }
}
