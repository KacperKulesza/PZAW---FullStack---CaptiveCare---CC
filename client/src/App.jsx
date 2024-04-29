
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PrisonerDatabase from './components/PrisonerDatabase'
import PrisonerMainList from './components/PrisonerMainList'
import PrisonerDetailsList from './components/PrisonerDetailsList'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'

function App() {

  const navigate = useNavigate()

  return (
    <>
      <h1>więzienie</h1>
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
        </ul>
      </nav>

      <Routes>
        <Route path="/prisoners-main" element={<PrisonerMainList />}/>
        <Route path="/prisoners-details" element={<PrisonerDetailsList />}/>
        <Route path="/database" element={<PrisonerDatabase />}/>
        <Route path="/" element={<h1>Strona Główna!</h1>}/>
      </Routes>
    </>
  )
}

export default App
