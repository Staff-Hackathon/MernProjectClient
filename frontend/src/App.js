import { Route, Routes } from "react-router-dom"
import Login from "./screens/login"
import Register from "./screens/Regsiter"
import Home from "./screens/Home"
import { ToastContainer } from "react-toastify"

function App() {
  return (
    <div className='container'>
      <Routes>
        {/* default route */}
        <Route path='' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='home' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App