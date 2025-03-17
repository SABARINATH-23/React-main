import { NavLink } from "react-router-dom";
import logo from"../Images/4lCu2zih0ca1.svg"


const Login = ()=>{
    return(
        <>
        <form className="login">
          <div className="loginTop">
            <img src={logo} alt="logo"></img>
          </div>
          <div className="loginDown">
                        <p>Login in to Facebook </p>
                        <input type="email" placeholder="Email address or phone number"></input>
                        <input type="password" placeholder="Password"></input>
                        <button>Log in</button>
                        <div className="Navigate">
                        <NavLink>Forgotten Account?</NavLink> 
                        <NavLink>Sign up for Facebook</NavLink>
                        </div>
               
          </div>
          </form>
        </>
    )
}
export default Login;
