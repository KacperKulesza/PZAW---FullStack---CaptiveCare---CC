
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PrisonerDatabase from './components/PrisonerDatabase'
import PrisonerMainList from './components/PrisonerMainList'
import PrisonerDetailsList from './components/PrisonerDetailsList'
import Login from './components/Login'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'

function App() {

  const navigate = useNavigate()

  return (
    <>
      <h1>The prison</h1>
      <nav>
        <ul>
          <li>
            <Link to="prisoners-main">Show Prisoner main list</Link>
          </li>
          <li>
            <Link to="prisoners-details">Show Prisoner details list</Link>
          </li>
          <li>
            <Link to="database">Show Prisoner database manager</Link>
          </li>
          <li>
            <Link to="login">Admin login</Link>
          </li>
          <li>
            <Link to="">Main page</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/prisoners-main" element={<PrisonerMainList />}/>
        <Route path="/prisoners-details" element={<PrisonerDetailsList />}/>
        <Route path="/database" element={<PrisonerDatabase />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<h1>The Main Page of The Prison!</h1>}/>
      </Routes>
    </>
  )
}

export default App
