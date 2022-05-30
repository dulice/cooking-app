import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from '../components/Nav'
import Cuisine from './Cuisine'
import Home from './home'
import Searched from './Searched'
import Detail from './Detail';

const Pages = () => {
  return (
    <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={ < Home /> } />
          <Route path="/cuisine/:type" element={ < Cuisine /> } />
          <Route path="/searched/:name" element={ < Searched /> } />
          <Route path="/detail/:id" element={ < Detail /> } />
        </Routes>
    </BrowserRouter>
  )
}

export default Pages