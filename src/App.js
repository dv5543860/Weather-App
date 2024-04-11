import React from 'react'
import CurrentLocation from './currentLocation'
import './App.css'

const App = () => {
  return (
    <div>
      <div className="container">
        <CurrentLocation/>
      </div>

      <div className="footer-info">
       Developed by{" "}Dipanshu Verma
      </div>
    </div>
  )
}

export default App
