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
import Loading from "./components/Shared/Loading";
import PassReset from "./pages/UserAuthentication/PassReset";
import PrivateRoute from "./Routes/PrivateRoute";
import Footer from "./components/Shared/Footer";
import SingleBlogDetails from "./pages/Blog/BlogDetails/SingleBlogDetails";


function App() {

  const [loading] = useLoading()

  return (
    <div className="">

      {loading ?
        <div className="w-screen h-screen grid justify-center items-center bg-white">
          <Loading ></Loading>
        </div>
        :
        <>
          <Navbar>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/allblog" element={<AllBlogs />} />
              <Route path="/allblog/:ID" element={<SingleBlogDetails />} />

              {/* private route */}
              <Route element={<PrivateRoute></PrivateRoute>}>
                <Route path="/addblog" element={<AddBlog />} />
              </Route>

              <Route path="/about" element={<About />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signin/forgetpassword" element={<PassReset />} />
              <Route path="/register" element={<SignUp />} />
            </Routes>

            <div>
            <Footer></Footer>
            </div>

          </Navbar>
          <ToastContainer />
        </>
      }
    </div>
  );
}

export default App;
