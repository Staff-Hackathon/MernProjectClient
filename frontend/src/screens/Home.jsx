import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { canVisit, showErrorAlert } from '../utils'

export default function Home() {
  const [blogs, setBlogs] = useState([])
  const navigate = useNavigate()

  const onLogout = () => {
    // remove all the cached settings from session
    sessionStorage.removeItem('firstName')
    sessionStorage.removeItem('lastName')
    sessionStorage.removeItem('role')
    sessionStorage.removeItem('token')

    // redirect to the login page
    navigate('/')
  }


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
      <h3 className='header'>Home</h3>

      <Link
        to='/create-feedback'
        className='btn btn-success btn-sm'
        style={{ marginBottom: 10, marginRight: 10 }}>
        Create feedback
      </Link>

      <Link
        to='/my-feedbacks'
        className='btn btn-success btn-sm'
        style={{ marginBottom: 10 }}>
        My Feedbacks
      </Link>

    </div>
  )
}
