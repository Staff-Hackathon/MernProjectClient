import axios from "axios";
import config from "../config";

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

export function loadAllFeedBacks(callback) {
  const url = config.server + "/feedback/all";
  axios.get(url, prepareTokenHeader()).then((response) => {
    const result = response.data;
    callback(result);
  });
}

export function loadAllMyFeedBacks(id, callback) {
  const url = config.server + "/feedback/" + id;
  axios.get(url, prepareTokenHeader()).then((response) => {
    const result = response.data;
    callback(result);
  });
}

export function loadScheduledFeedBacks(course, date, callback) {
  const url = config.server + "/feedback/bycourse";
  axios.post(url, {course, date}, prepareTokenHeader()).then((response) => {
    const result = response.data;
    console.log(result);
    callback(result);
  });
}

export function checkForNonSubmitted(sid, callback) {
  const url = config.server + "/tfeedback/"  + sid;
  axios.get(url, prepareTokenHeader()).then((response) => {
    const result = response.data;
    // console.log(result);
    callback(result);
  });
} 

export function createFeedback(course, sdate, edate, type, uid, callback) {
  const url = config.server + "/feedback";
  axios.post(url, {course, sdate, edate, type, uid}, prepareTokenHeader()).then((response) => {
    const result = response.data;
    callback(result);
  });
}


export function submitFeedback(fid, sid, Punctuality, queries_solved, Initiative, responsiveness, total, callback) {
  const url = config.server + "/tfeedback/" + fid;
  console.log(fid, sid, Punctuality, queries_solved, Initiative, responsiveness, total);
  axios.post(url, {sid, Punctuality, queries_solved, Initiative, responsiveness, total,}, prepareTokenHeader()).then((response) => {
    const result = response.data;
    console.log(result);
    callback(result);
  });
}