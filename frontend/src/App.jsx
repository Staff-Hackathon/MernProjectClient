import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';
import FeedbackTheory from './pages/FeedbackTheory';
import FeedbackLab from './pages/Feedbacklab';
import FeedbackInfra from './pages/FeedbackInfra';
function App() {
  return (
    <div className="container">
      Welcome...!
      <Routes>
        <Route index element={<Signin />} />
        <Route path='/' element={<Signin />} />
        <Route path='/Signup' element={<Signup />} />

        <Route path='/Home' element={<Home />} />

        <Route path='/FeedbackTheory' element={<FeedbackTheory />} />
        <Route path='/FeedbackLab' element={<FeedbackLab />} />
        <Route path='/FeedbackInfra' element={<FeedbackInfra />} />
      </Routes>

     </div>
  );
}

export default App;
