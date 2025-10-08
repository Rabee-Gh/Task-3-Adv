import './App.css'
import Over from './components/Over/Over'
import Footer from './components/Footer/Footer'
import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About/About'
import Academics from './Pages/Academics/Academics'
import Admissions from './Pages/Admissions/Admissions'
import Student from './Pages/Student/Student'
import Contact from './Pages/Contact/Contact'
import Navbar from './components/Navbar/Navbar'
function App() {
  return (
      <>
          <div className="app-container">

          <Over />
          <Navbar section={[ {nam:"Home",hre:"/"} , {nam: "About Us" ,hre:"/About Us"} ,{nam:"Academics",hre:"/Academics"} ,{nam:"Admissions",hre:"/Admissions"} ,{nam:"Student Life",hre:"/Student Life"  },{nam:"Contact", hre:"/Contact"}]}/>
          <Routes>
            {/* كل كونتينر ساستخدمه داخل القسم */}
                <Route path='/' element={<Home />}/>
                <Route path='/About Us' element={<About />}/>           
                <Route path='/Academics' element={<Academics />}/>
                <Route path='/Admissions' element={<Admissions/>}/>
                <Route path='/Student Life' element={<Student/>}/>
                <Route path='/Contact' element={<Contact/>}/>
              </Routes>

          <Footer />
          </div>
        
          
      </>
  )
}

export default App
