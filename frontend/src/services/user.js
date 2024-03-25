import axios from 'axios'
import config from '../config'

function prepareTokenHeader() {
  const token = sessionStorage.getItem("token");
  if (!token || token.length === 0) {
    return {};
  }

  return {
    headers: {
      "x-token": token,
    },
  };
}

export function userLogin(email, password, callback) {
  const url = config.server + '/user/signin'
  axios.post(url, { email, password }).then((response) => {
    const result = response.data
    callback(result)
  })
}

export function loadAllFaculties(callback) {
  const url = config.server + "/user/allfaculties";
  axios.get(url, prepareTokenHeader()).then((response) => {
    const result = response.data;
    console.log(result);
    callback(result);
  });
}

export function loadAllCourses(callback) {
  const url = config.server + "/user/allcourses";
  axios.get(url, prepareTokenHeader()).then((response) => {
    const result = response.data;
    console.log(result);
    callback(result);
  });
}
