import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import LoginHome from './Layout/loginHome';
import Login from './Pages/login';
import LoginCapturePhoto from './Layout/LoginCapturePhoto';
import HomePage from './Layout/HomePage';
import PrivateRoutes from './utils/ProtectedRoutes';


function App() {
  return (
    <Routes>
      <Route path='/login' element={<LoginHome/>}></Route>
      <Route element={<PrivateRoutes />}>
        <Route path='/capturePhoto' element={<LoginCapturePhoto/>}></Route>
        <Route path='/' element={<HomePage/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
