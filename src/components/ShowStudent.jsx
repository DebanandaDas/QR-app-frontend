import React, { useState,useEffect } from 'react'
import "./CSS/addStudent.css";
import "./CSS/showStud.css";
import addStudentImg from "../public/addStudent.png";
import qrPlaceholder from "../public/qrPlaceholder.png";

const ShowStudent = (prop) => {
  
  const [student, setStudent] = useState({username:"",password:"",name:"", roll:"",regNo:"",department:"",address:""});
  
  const getStudent= async ()=>{
    try{
    const res = await fetch(
      `http://localhost:5000/students/regNo/18U10385`,
      {
        method: "GET",

        headers: {
          Accept: "appllication/json",
          "Content-Type": "application/json",
        },
      }
    );
    const data= await res.json();
    setStudent(data.student);


    }
    catch(err)
    {
      console.log(err);
    }
  }
  useEffect(()=>{
    getStudent();
  },[]);


  return (
    <>
      <div className="container-fluid">
        <div className="container pt-2">
          <div className="row">
            <div className="col-md-12 img-row">
              <div className="img-div">

              <img className="img-box" src={(student.photo)? student.photo.url: addStudentImg}  alt="studentImg" />
              </div>
              <div className="img-div qr-div">

              <img className="img-box " src={(student.qrcode)? student.qrcode.url : qrPlaceholder}  alt="QRImg" />
              </div>
            </div>
          </div>
          <form className="row g-4 ">
            
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="inputEmail4" value={student.name} disabled />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Department
              </label>
              <input type="text" className="form-control" id="inputPassword4" value={student.department} disabled/>
            </div>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Registration Number
              </label>
              <input type="text" className="form-control" id="inputEmail4" value={student.regNo} disabled />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Roll Number
              </label>
              <input type="text" className="form-control" id="inputPassword4" value={student.roll} disabled/>
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
                disabled
                value={student.address}
              />
            </div>
            <div className="col-12">
                <h2>Grade Cards</h2>
            </div>
            
            <a
                  className="btn btn-primary"
                  href="https://nitdgp.ac.in/"
                  target="_blank"
                  role="button"
                >
                  Semester 1
                </a>
                <a
                  className="btn btn-primary"
                  href="https://nitdgp.ac.in/"
                  target="_blank"
                  role="button"
                >
                  Semester 2
                </a>
              
              
                <a
                  className="btn btn-primary"
                  href="https://nitdgp.ac.in/"
                  target="_blank"
                  role="button"
                >
                  Semester 3
                </a>
                <a
                  className="btn btn-primary"
                  href="https://nitdgp.ac.in/"
                  target="_blank"
                  role="button"
                >
                  Semester 4
                </a>

                <a
                  className="btn btn-primary"
                  href="https://nitdgp.ac.in/"
                  target="_blank"
                  role="button"
                >
                  Semester 5
                </a>
                <a
                  className="btn btn-primary"
                  href="https://nitdgp.ac.in/"
                  target="_blank"
                  role="button"
                >
                  Semester 6
                </a>
              
              
                <a
                  className="btn btn-primary"
                  href="https://nitdgp.ac.in/"
                  target="_blank"
                  role="button"
                >
                  Semester 7
                </a>
                <a
                  className="btn btn-primary"
                  href="https://nitdgp.ac.in/"
                  target="_blank"
                  role="button"
                >
                  Semester 8
                </a>
            
            
            
            
            


            
          </form>
        </div>
      </div>
    </>
  )
}

export default ShowStudent