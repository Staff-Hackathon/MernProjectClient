import axios from 'axios'
import config from '../config'

export function userLogin(email, password, callback) {
  const url = config.server + '/user/signin'
  axios.post(url, { email, password }).then((response) => {
    const result = response.data
    callback(result)
  })
}
