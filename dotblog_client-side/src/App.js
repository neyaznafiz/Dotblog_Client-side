import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar/Navbar";
import AllBlogs from "./pages/Blog/AllBlogs/AllBlogs";
import Home from './pages/Home/Home'
import About from './pages/About'
import SignIn from './pages/UserAuthentication/SignIn'
import AddBlog from "./pages/Blog/AddBlog";
import SignUp from "./pages/UserAuthentication/SignUp";
import useLoading from "./Hooks/useLoading";
import { HashLoader } from "react-spinners";


function App() {

  const [loading] = useLoading()

  return (
    <div className="">

      {loading ?
        <div className="w-screen h-screen grid justify-center items-center">
          <HashLoader color='#05a962' loading={loading} size={250} />
        </div>
        :
        <>
          <Navbar>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/allblog" element={<AllBlogs />} />
              <Route path="/addblog" element={<AddBlog />} />
              <Route path="/about" element={<About />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>

          </Navbar>
          <ToastContainer />
        </>
      }
    </div>
  );
}

export default App;
