import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
 import ErrorPage from './Components/ErrorPage';
// import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';
import  Homepage  from './Components/Homepage';
import Lazytest from './Components/test';
const LazyUserDashBoard = React.lazy(()=>import('./Components/UserDashBoard'))
const LazySample = React.lazy(()=>import('./Components/Sample1'))
const LazyContactUs = React.lazy(()=>import('./Components/Contactus.js'))
const LazyAdminDashBoard = React.lazy(()=>import('./Components/AdminDashBoard'))
const Common = React.lazy(()=>import('./Components/Commom.jsx'))
//const LazyLogin= React.lazy(()=>import('./Components/Login'))

const App = () => {
  return (
    <div>
  
    <Router >
  {/* <Navbar/> */}
  
    <Routes>
    <Route path="/" element={<React.Suspense>
      <Homepage/>
      </React.Suspense>} />
      
    <Route path="*" element={<ErrorPage />} />
    <Route path="/AdminDashBoard" element={<React.Suspense>
        <LazyAdminDashBoard/>
      </React.Suspense>} />
      <Route path="/ContactUs" element={<React.Suspense>
        <LazyContactUs/>
      </React.Suspense>} />
<Route element={<Common/>}>
    
      
    <Route path="/UserDashBoard" element={ <React.Suspense>
        <LazyUserDashBoard/>
      </React.Suspense>} />
   
   
    <Route path="/sample" element={<React.Suspense>
        <LazySample/>
      </React.Suspense>} />
    <Route path="/test" element={<React.Suspense>
        <Lazytest/>
      </React.Suspense>} />

    </Route>
  </Routes>
</Router>
    </div>
  )
}

export default App