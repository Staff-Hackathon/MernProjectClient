import { Route, Routes } from "react-router-dom"
import Login from "./screens/login"
import Register from "./screens/Regsiter"
import Home from "./screens/Home"
import CreateFeedback from "./screens/CreateFeedback"
import StudentDashboard from "./screens/StudentDashboard"
import StaffDashboard from "./screens/StaffDashboard"
import SubmitFeedback from "./screens/SubmitFeedback"

function App() {
  return (
    <div className='container'>
      <Routes>
        {/* default route */}
        <Route path='' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='home' element={<Home />} />
        <Route path='create-feedback' element={<CreateFeedback />} />
        <Route path='student-Dashboard' element={<StudentDashboard />} />
        <Route path='staff-Dashboard' element={<StaffDashboard />} />
        <Route path='submit-feedback' element={<SubmitFeedback />} />
      </Routes>
    </div>
  )
}

export default App