import React, { Suspense } from "react"
import { BrowserRouter as Router , Routes, Route} from "react-router-dom"
const About = React.lazy (()=> import ("../Components/About"))
const Home = React.lazy (()=> import ("../Components/Home"))
const Contact = React.lazy (()=> import ("../Components/Contact"))
const Books = React.lazy (()=> import ("../Components/Books"))




function App() {


  return (
    <>
      <Router>
        <Suspense>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/books' element={<Books/>} />
          <Route path='/contact' element={<Contact/>} />
         

        </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
