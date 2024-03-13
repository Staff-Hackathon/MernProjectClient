import { Route, Routes } from "react-router-dom"
import Login from "./screens/login"
import Register from "./screens/Regsiter"
import Home from "./screens/Home"
import CreateFeedback from "./screens/CreateFeedback"

function App() {
  return (
    <div className='container'>
      <Routes>
        {/* default route */}
        <Route path='' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='home' element={<Home />} />
        <Route path='create-feedback' element={<CreateFeedback />} />
      </Routes>
    </div>
  )
}

export default App