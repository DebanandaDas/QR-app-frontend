import React, { useState, useRef } from "react";
import "./CSS/addStudent.css";
import addStudentImg from "../public/addStudent.png";

const ModifyStud = () => {
  const [Image , setImage] = useState("");
  

  return (
    <>
      <div className="container-fluid">
        <div className="container pt-2">
          <div className="row">
            <div className="col-md-12">
              <div className="img-div">

              <img className="img-box" src={(Image) ? Image: addStudentImg}  alt="studentImg" />
              </div>
            </div>
          </div>
          <form className="row g-4 ">
            <div className="input-group mb-3 col-6">
              <label className="input-group-text" for="inputGroupFile01">
                Student Image
              </label>
              <input type="file" className="form-control" id="inputGroupFile01" onChange={(e)=> setImage(URL.createObjectURL(e.target.files[0]))} />
            </div>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Department
              </label>
              <input type="text" className="form-control" id="inputPassword4" />
            </div>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Registration Number
              </label>
              <input type="text" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Roll Number
              </label>
              <input type="text" className="form-control" id="inputPassword4" />
            </div>
            <div className="col-12">
              <label for="inputAddress" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Permanent Address"
              />
            </div>
            <div className="col-12">
                <h2>Upload the Grade Cards</h2>
            </div>
            <div className="col-6 input-group mb-3 ">
              <label className="input-group-text" for="inputGroupFile01">
                Semester 1
              </label>
              <input type="file" className="form-control" id="inputGroupFile01" />
            </div>
            <div className="col-6 input-group mb-3 ">
              <label className="input-group-text" for="inputGroupFile01">
                Semester 2
              </label>
              <input type="file" className="form-control" id="inputGroupFile01" />
            </div>
            <div className="col-6 input-group mb-3 ">
              <label className="input-group-text" for="inputGroupFile01">
                Semester 3
              </label>
              <input type="file" className="form-control" id="inputGroupFile01" />
            </div>
            <div className="col-6 input-group mb-3 ">
              <label className="input-group-text" for="inputGroupFile01">
                Semester 4
              </label>
              <input type="file" className="form-control" id="inputGroupFile01" />
            </div>
            <div className="col-6 input-group mb-3 ">
              <label className="input-group-text" for="inputGroupFile01">
                Semester 5
              </label>
              <input type="file" className="form-control" id="inputGroupFile01" />
            </div>
            <div className="col-6 input-group mb-3 ">
              <label className="input-group-text" for="inputGroupFile01">
                Semester 6
              </label>
              <input type="file" className="form-control" id="inputGroupFile01" />
            </div>
            <div className="col-6 input-group mb-3 ">
              <label className="input-group-text" for="inputGroupFile01">
                Semester 7
              </label>
              <input type="file" className="form-control" id="inputGroupFile01" />
            </div>
            <div className="col-6 input-group mb-3 ">
              <label className="input-group-text" for="inputGroupFile01">
                Semester 8
              </label>
              <input type="file" className="form-control" id="inputGroupFile01" />
            </div>


            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Modify
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModifyStud;