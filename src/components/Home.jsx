import React,{useContext} from 'react';
import { NavLink } from "react-router-dom";
import { UserContext } from '../App';
const Home = () => {
  const {authImg}=useContext(UserContext);
  console.log(`home's : ${authImg}`);
  return (
    <section className="sign-in" style={{ "place-items": "unset" }}>
      <div className="container mt-5">
        <div className="signin-content">
          <div className="d-grid gap-2 col-6 mx-auto">
            <NavLink
              className="btn btn-primary"
              
            to="/2FA"
            >
              Verify a certificate
            </NavLink>
            <NavLink
              className="btn btn-success"
              
            to="/AdminLogin"
            >
              Admin Login
            </NavLink>
            <a
              className="btn btn-warning"
              
            href="https://nitdgp.ac.in" target="_blank"
            >
              Visit College website
            </a>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;