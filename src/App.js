import Header from "./components/Header";
import Card from "./components/Card";
import Todocontainer from "./components/Todocontainer";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./paes/Login";
import Signup from "./paes/signup";
import Landing from "./paes/Landing";
import { useState } from "react";

function App()
{
  const [user ,setuser]= useState([
    {
       username:"yoga",
       password:"123"
    },
])
  return(
    <div>
  <BrowserRouter>
  <Routes>
  <Route path='/'element={<Login user={user} setuser={setuser} />}></Route>
  <Route path='/Signup'element={<Signup user={user}setuser={setuser} />}></Route>
  <Route path='/landing'element={<Landing/>}></Route>
  </Routes>
  </BrowserRouter>
</div>


  )
  
 
}
 

export default App