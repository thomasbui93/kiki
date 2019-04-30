import axios from 'axios'
import { get } from 'js-cookie'

export const http = axios.create({
  headers: {
    common: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-CSRFToken': get('csrftoken')
    }
  }
})

export const httpForm = axios.create({
  headers: {
    'Accept': 'application/json'
  }
})

export const encodeForm = (data: { [s: string]: string }) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
}
