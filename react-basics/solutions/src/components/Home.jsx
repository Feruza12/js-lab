import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
        <Link to="/counter" className="home__link">Counter</Link>
        <Link to="/todo" className="home__link">ToDo App</Link>
    </div>
  )
}

export default Home