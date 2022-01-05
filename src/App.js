import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login/login.jsx";
import Home from './components/home/home';


function App() {
  if(localStorage.getItem('userId')){
    return(
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/Home" element={<Home/>}/>
          </Routes>
        </Router>
      </div>
    )

  }else{
    return (
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/Home" element={<Home/>}/>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
