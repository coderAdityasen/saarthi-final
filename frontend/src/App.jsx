import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Signup from './Components/Signup'
import About from './Components/About'
import News from './Components/News'
import Signin from './Components/Signin'


function App() {
	if(!JSON.parse(localStorage.getItem('userData'))){
		return (
			<>
<BrowserRouter>
<Routes>
	<Route path='/' element={<Home/>}/>
	<Route path='/signup' element={<Signup/>}/>
	<Route path='/login' element={<Signin/>}/>
</Routes>

</BrowserRouter>
			</>
		)
	}else{
		return (
			<>
			<BrowserRouter>
			<Routes>
				<Route path='/home' element={<Home/>}/>
				<Route path='/about' element={<About/>}/>
				<Route path='/news' element={<News/>}/>
			</Routes>
			</BrowserRouter>
			</>
		)
	}
}

export default App