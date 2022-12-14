import React from 'react';
import Home from './Page/home/Home'
import LoginPage from './Page/login/Login';
import RegisterPage from './Page/register/Register'
// import Profile from './Page/Profile/Profile';
import Dashboard from './Page/dashboard/Dashboard'
import { Routes, Route } from "react-router-dom"
import NavbarComponent from './Component/Navbar/Navbar'
import SidebarComponent from './Component/Sidebar/Sidebar';
// import { useWindowSize } from 'react-use';
import { WebSocketClient } from './Websocket/Client';


function App({ Component }) {
  // const {width, height} = useWindowSize()

  return (
    <div className='App'>
      <NavbarComponent />
      <SidebarComponent/>
      {WebSocketClient()}
      <div align='center' style={{
                    zIndex:0,
                    }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* <Route path="/profil/:id" element={<Profile />} /> */} 
        </Routes>
      </div>

    </div>
  );
}

export default App;
