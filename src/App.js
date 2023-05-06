import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './Pages/Contact';
import PrivateRoute from './Components/PrivateRoute';
import UserDashboard from './Pages/UserDashboard';
import About from './Pages/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />

          <Route path='/user' element={<PrivateRoute />}>

            <Route path='dashboard' element={<UserDashboard />} />

          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
