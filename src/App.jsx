import { useState } from 'react'
import timetable from './timetable'
import Menu from './components/menu/index'
import Questions from './components/Questions'

import './App.css'

function App() {
  
  const staffNames = timetable.map(name=>{
    return (
      <Menu.Item>{name.Staff}</Menu.Item>
    )
  })

  return (
    <>
      <Menu onOpen={() => console.log("Opened/closed")}>
        <Menu.Button>Teacher</Menu.Button>
        <Menu.Dropdown>
          {staffNames}
        </Menu.Dropdown>
      </Menu>

      <Questions />
    </>
  )
}

export default App
