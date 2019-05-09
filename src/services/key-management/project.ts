import { http } from "../request"

export const getProjects = async () => {
  try {
    const response = await http.get('v1/api/project/el')
    return response.data.results
  } catch (err) {
    return false
  }
}
