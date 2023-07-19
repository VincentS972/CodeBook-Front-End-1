import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './Components/NavBar';
import Home from "./Components/Home"
import SignIn from './Components/SignIn';
import SignUp from "./Components/Signup";
import Forum from "./Components/Forum";
import Profile from "./Components/Profile";
import Footer from "./Components/Footer";
import UpdateProfile from "./Components/UpdateProfile";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/Profile/:id" element={<Profile />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Profile/update/:id" element={<UpdateProfile/>}/>
          <Route path="/SignIn/SignUp" element={<SignUp />}/>
        </Routes>
        <Footer/>
      </Router>

    </div>

  );
}


export default App;
