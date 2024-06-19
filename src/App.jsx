// eslint-disable-next-line no-unused-vars
import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import './context/Context'
import './index.css'

const App = () => {
  return (
    <>
      <Sidebar/>
      <Main />
    </>
  )
}

export default App
