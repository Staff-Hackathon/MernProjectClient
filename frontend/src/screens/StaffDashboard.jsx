import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { canVisit, showErrorAlert } from '../utils'
import Feedback from '../components/Feedback'
import {loadAllMyFeedBacks} from '../services/feedback'

export default function StaffDashboard() {

    const [myfeedbacks, setmyfeedbacks] = useState([])
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

    // redirect to the login page
    navigate('/')
  };

  useEffect(() => {
    const id = sessionStorage['uid']
    loadAllMyFeedBacks(id, (result) => {
        if (result["status"] === "success") {
          setmyfeedbacks(result["data"]);
        } else {
            showErrorAlert(result["error"]);
        }
    });
}, []);


  return (
    <div>
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
      <h3 className='header'>Staff Dashboard</h3>

      <div className="row">
                {myfeedbacks.length > 0 &&
                    myfeedbacks.map((feedback) => {
                        return <Feedback key={feedback.id} feedback={feedback} />;
                    })}

                {myfeedbacks.length == 0 && (
                    <h2>No any feedbacks added yet.</h2>
                )}
            </div>
    </div>
  )
}