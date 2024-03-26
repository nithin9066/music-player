import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Stations from './Stations'

export default function Router() {
  return (
    <HashRouter>
    <Routes>
        <Route index element={<App />}></Route>
        <Route path='stations' element={<Stations />}></Route>
    </Routes>
    </HashRouter>
  )
}
