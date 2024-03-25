import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { showErrorAlert, showSuccessAlert } from "../utils"
import { userRegister } from '../services/user'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [course, setCourse] = useState('')
  const navigate = useNavigate()
  const onUserRegister = () => {
    userRegister(firstName, lastName, email, password, role, course, (result) => {
        if (result["status"] === "success") {
          navigate("/home")
          showSuccessAlert("Added new User")
        } else {
            showErrorAlert("error while adding a new User")
        }
    })
  }

  return (
    <div>
      <h3 className='header'>Register</h3>

      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <div className='form'>
            <div className='mb-3'>
              <label htmlFor=''>First Name</label>
              <input
                onChange={(e) => setfirstName(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Last Name</label>
              <input
                onChange={(e) => setlastName(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                className='form-control'
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                className='form-control'
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Role</label>
              <select onChange={(e) => setRole(e.target.value)} className="form-control">
                <option value="">Choose Role</option>
                <option value="student">Student</option>
                <option value="staff">Staff</option>
              </select>
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Course</label>
              <input
                onChange={(e) => setCourse(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>

            <div className='mb-3'>
            <button
                onClick={onUserRegister}
                style={{ marginRight: 10 }}
                className="btn btn-success"
            >
                Register
              </button>
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>
    </div>
  )
}
