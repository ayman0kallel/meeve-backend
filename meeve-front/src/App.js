import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HomePage from "../src/pages/HomePage"
import Profile from "../src/pages/Profile"
import CreerMeet from "./Components/profile/CreerMeet";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MatchPage from "./pages/MatchPage";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/Signup" element={<SignUp/>}/>
          <Route path="/HomePage" element={<HomePage/>}/>
          <Route path="/match" element={<MatchPage/>}/>
          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/CreerMeet" element={<CreerMeet/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
