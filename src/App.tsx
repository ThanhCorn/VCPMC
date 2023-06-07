import React, { Fragment, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { Home, MainLayout, ResetPassword } from './pages'
import { myPath } from './myPath'
import { Device } from './@types/myType'
import InfoDevice from './pages/Management/Equip/InfoDevice'

interface ProtectedRouteProps {
  element: React.ReactNode
  path: string
  id?: number
  [key: string]: any
}

function App() {
  const [song, setSong] = useState<Device | null>(null)

  return (
    <React.Fragment>
      <Routes>
        {myPath.map((item, index) => {
          return (
            <Fragment key={index}>
              <Route path='/' element={<Home />} />
              <Route path='/reset-password' element={<ResetPassword />} />
              <Route path={item.path} element={item.element} key={item.path} />
            </Fragment>
          )
        })}
      </Routes>
    </React.Fragment>
  )
}

export default App
