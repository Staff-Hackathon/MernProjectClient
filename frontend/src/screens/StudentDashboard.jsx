import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { canVisit, showErrorAlert } from '../utils'
import Feedback from '../components/Feedback'
import {checkForNonSubmitted, loadScheduledFeedBacks} from '../services/feedback'

export default function StaffDashboard() {

    const [feedbacks, setfeedbacks] = useState([])
    const [nofeedbacks, setNofeedbacks] = useState([])
    
    const navigate = useNavigate()

    const onLogout = () => {
      // remove all the cached settings from session
      sessionStorage.removeItem('uid')
      sessionStorage.removeItem('firstName')
      sessionStorage.removeItem('lastName')
      sessionStorage.removeItem('role')
      sessionStorage.removeItem('course')
      sessionStorage.removeItem('token')
      sessionStorage.removeItem('profileImage')

    navigate('/')
  };

  useEffect(() => {
    const course = sessionStorage['course']
    var today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    checkForNonSubmitted(sessionStorage["uid"], (result) => {
        if (result["status"] === "success") {
          setNofeedbacks(result["data"]);
        } else {
            showErrorAlert(result["error"]);
        }
    });

    loadScheduledFeedBacks(course, date, (result) => {
      sessionStorage.removeItem('fid');
        if (result["status"] === "success") {
          setfeedbacks(result["data"]);
        } else {
            showErrorAlert(result["error"]);
        }
    });
}, []);


  return (
    <div className="main1">
      <div className=' float-end'>
        <img
          style={{ width: 40 }}
          src={`http://localhost:4000/${sessionStorage['profileImage']}`}
          alt=''
        />
        <div>Welcome {sessionStorage['firstName']}</div>
        <button onClick={onLogout} className='btn btn-warning btn-sm'>
          Logout
        </button>
      </div>
      <h3 className='header'>Student Dashboard</h3>

      <div className="row">
        {feedbacks.forEach(e1 => {
            nofeedbacks.forEach(e2 => {
            const index = feedbacks.indexOf(e1);
            if (e1.id == e2.fid && index > -1) {
                feedbacks.splice(index, 1); // 2nd parameter means remove one item only
            }})
        })}
        {feedbacks.length > 0 &&
            feedbacks.map((feedback) => {
                return <Feedback key={feedback.id} feedback={feedback} />;
            })}

        {feedbacks.length == 0 && (
            <h2>No any feedback scheduled yet.</h2>
        )}
      </div>
    </div>
  )
}