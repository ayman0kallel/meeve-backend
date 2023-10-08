import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import HomePage from "../src/pages/HomePage"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div >
      <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/Signup" element={<SignUp/>}/>
        <Route path="/HomePage" element={<HomePage/>}/>
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
