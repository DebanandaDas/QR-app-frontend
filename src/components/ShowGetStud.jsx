import React from "react";
import "./CSS/login.css";
import "./CSS/search.css";
import { useNavigate } from "react-router-dom";

const ShowGetStud = () => {
  const navigate= useNavigate();
  return (
    <section className="sign-in" style={{ "place-items": "unset" }}>
      <div className="container mt-5">
        <div className="search-content">
          <form className="form-inline">
            
            <div className="form-group mx-sm-3 mb-2">
              <label for="inputPassword2" className="sr-only">
                Registration Number
              </label>
              <input
                type="text"
                className="form-control"
                id="inputPassword2"
                placeholder="Reg No."
              />
            </div>
            <button type="submit" className="btn btn-primary mb-2" onClick={(e)=>{
              e.preventDefault();
              navigate("/showStudent");
            }} >
              Show Student
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ShowGetStud;
