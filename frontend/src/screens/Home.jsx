import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { canVisit, showErrorAlert } from '../utils'
import {loadAllFeedBacks} from '../services/feedback'
import Feedback from '../components/Feedback'

export default function Home() {
  const [feedbacks, setfeedbacks] = useState([])
  const navigate = useNavigate()
 
  const onLogout = () => {
    // remove all the cached settings from session
    sessionStorage.removeItem('uid')
    sessionStorage.removeItem('firstName')
    sessionStorage.removeItem('lastName')
    sessionStorage.removeItem('role')
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('profileImage')

    // redirect to the login page
    navigate('/')
  };

  useEffect(() => {
    loadAllFeedBacks((result) => {
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
      <h3 className='header'>Home</h3>

      <Link
        to='/create-feedback'
        className='btn btn-success btn-sm'
        style={{ marginBottom: 10, marginRight: 10 }}>
        Create feedback
      </Link>

      <div className="row">
                {feedbacks.length > 0 &&
                    feedbacks.map((feedback) => {
                        return <Feedback key={feedback.id} feedback={feedback} />;
                    })}

                {feedbacks.length == 0 && (
                    <h2>No any feedbacks added yet.</h2>
                    )}
            </div>
    </div>
  )
}
