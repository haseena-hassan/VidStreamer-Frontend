import './App.css';
import Login from './components/dashboard/Login';
import Signup from './components/dashboard/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignupDashboard } from './components/dashboard/SignupDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={
          <SignupDashboard>
            <Signup />
          </SignupDashboard>
        } />
        <Route path="/login" element={
          <SignupDashboard>
            <Login />
          </SignupDashboard>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
