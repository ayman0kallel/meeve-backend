import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HomePage from "../src/pages/HomePage"
import Profile from "../src/pages/Profile"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/Signup" element={<SignUp/>}/>
          <Route path="/HomePage" element={<HomePage/>}/>
          <Route path="/Profile" element={<Profile/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
