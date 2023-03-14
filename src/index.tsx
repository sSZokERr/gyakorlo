import ReactDOM from 'react-dom';
import './index.css';

import Layout from './pages/Layout'
import Home from './pages/Home'
import Login from './pages/LogIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import { useState } from 'react';

export default function App() {
  const [ token, setToken ] = useState('');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='register' element={<Register/>}/>
          <Route path='logout' element={<Layout/>}/>
          <Route path='login' element={<Login authToken={token} onAuthTokenChange={setToken} />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}



ReactDOM.render(<App />,  document.getElementById('root'))