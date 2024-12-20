import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './webpages/general/home'
import Signup from './webpages/general/signup'
import Login from './webpages/general/login'
import Profile from './webpages/general/profile'
import ExerciseHome from './webpages/exercise/exercise-home'
import NutritionHome from './webpages/nutrition/nutrition-home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/exercise-home' element={<ExerciseHome/>}/>
        <Route path='/nutrition-home' element={<NutritionHome/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App