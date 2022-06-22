import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from './pages/Home/Home'


function App() {
  return (
    <div className="">

      <Navbar>

        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>

      </Navbar>

    </div>
  );
}

export default App;
