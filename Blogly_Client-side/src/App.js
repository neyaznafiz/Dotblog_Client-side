import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AllBlogs from "./pages/Blog/AllBlogs/AllBlogs";
import Home from './pages/Home/Home'
import About from './pages/About'
import SignIn from './pages/UserAuthentication/SignIn'


function App() {
  return (
    <div className="">

      <Navbar>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/allblog" element={<AllBlogs/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/signin" element={<SignIn/>}/>
        </Routes>

      </Navbar>

    </div>
  );
}

export default App;
