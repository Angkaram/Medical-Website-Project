//import './App.css';
import LoginPrompt from "./components/loginprompt";
import SignUp from "./components/signup";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPatientButton from './components/addButton';

import Nav from "./components/Navbar";
import View from "./components/States_Views";

import DoctorView from "./components/DoctorView";
import FDAView from "./components/FDAView";
import BavariaView from "./components/BavariaView";

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Nav />} />
          <Route path = "/Login" element = {<LoginPrompt />} />
          <Route path = "/SignUp" element = {<SignUp />} />
          <Route path = "/AddPatientButton" element = {<AddPatientButton />} />
          <Route path = "/View" element = {<View />} />
          <Route path = "/DoctorView" element = {<DoctorView />} />
          <Route path = "/FDAView" element = {<FDAView />} />
          <Route path = "/BavariaView" element = {<BavariaView />} />
        </Routes>
  </BrowserRouter>
  );
}

export default App;
