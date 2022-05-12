import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Contacts from './Component/Contacts/Contacts';
import Login from './Component/Login/Login';
import Footer from './Component/Footer/Footer';
import Services from './Component/Services/Services';
import AboutMe from './Component/AboutMe/AboutMe';
import ServiceCheckOut from './Component/Service/ServiceCheckOut';
import NotFound from './Component/NotFound/NotFound';
import Blogs from './Component/Blogs/Blogs';
import Register from './Component/Login/Register/Register';
import RequireAuth from './Component/Login/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/about' element={<AboutMe></AboutMe>}></Route>

        
       <Route path='/services/:serviceId' element={
       <RequireAuth>
         <ServiceCheckOut></ServiceCheckOut>
       </RequireAuth>}>
       </Route>

       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/contacts' element={<Contacts></Contacts>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
