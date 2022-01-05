import  React , { useRef }  from 'react';
import { useNavigate } from "react-router-dom";
import './login.css';

const Login = (props) => {
  const navigate = useNavigate();
  const email = useRef("");
  const handleSubmit = (event)=>{
    event.preventDefault();
    fetch('http://localhost:3000/users')
    .then((response) => response.json())
    .then((data) => {
        console.log("data",data);
        data.map((user)=>{
            if(email.current.value === user.email){
                localStorage.setItem("userId",user.id);
                navigate("/Home");
            }
        })
    });
  } 
  return (
    <div className="container">
      <div className="login">
        <div className="row">
          <div className="login-card">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="">Email</label>
                <input type="email" ref={email} />
              </div>
              <div>
                <label htmlFor="">password</label>
                <input type="password" />
              </div>
              <div>
                  <button className="btn btn-primary" type="submit">login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
