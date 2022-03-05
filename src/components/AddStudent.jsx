import React, { useState, useRef } from "react";
import "./CSS/addStudent.css";
import addStudentImg from "../public/addStudent.png";

const AddStudent = () => {
  const [Image , setImage] = useState("");
  const [gradeCards, setGradeCards] = useState([]);
  const [student, setStudent]= useState({username:"",password:"",name:"", roll:"",regNo:"",department:"",address:""});        
    
  const createStudent= async (e)=>{
    e.preventDefault();
    const fdata= new FormData();
    fdata.append("student", student);
    //fdata.append("photo", Image);
    //fdata.append("gradecards", gradeCards);
    try{
    const res= await fetch("https://qrcodes-backend.herokuapp.com/students/",{
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        "Accept": "application/json",
      },
      body: fdata
    })
    const data= res.json();
    if(res.status===201)
    {
      window.alert("added successfully");
    }
    else if(res.status === 400)
    {
      console.log(data);
    }
    else
    {
      window.alert("failed");
    }
  }
  catch(err)
  {
    window.alert(err);
  }
  }

  return (
    <>
      <div className="container-fluid">
        <div className="container pt-2">
          <div className="row">
            <div className="col-md-12 img-row">
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
              <input type="file" className="form-control" id="inputGroupFile01" onChange={(e)=> setImage(e.target.files[0])} />
            </div>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="inputEmail4" onChange={e=>{ setStudent((pre)=>({ ...pre,name : e.target.value}))}} />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Department
              </label>
              <input type="text" className="form-control" id="inputPassword4" onChange={e=>{ setStudent((pre)=>({ ...pre,department : e.target.value}))}} />
            </div>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Registration Number
              </label>
              <input type="text" className="form-control" id="inputEmail4" onChange={e=>{ setStudent((pre)=>({ ...pre, regNo : e.target.value}))}}/>
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Roll Number
              </label>
              <input type="text" className="form-control" id="inputPassword4" onChange={e=>{ setStudent((pre)=>({ ...pre, roll : e.target.value}))}}/>
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
                onChange={e=>{ setStudent((pre)=>({ ...pre,address : e.target.value}))}}
              />
            </div>
            <div className="col-12">
              <label for="inputAddress" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="username"
                onChange={e=>{ setStudent((pre)=>({ ...pre,username : e.target.value}))}}
              />
            </div>
            <div className="col-12">
              <label for="inputAddress" className="form-label">
                Password
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="password"
                onChange={e=>{ setStudent((pre)=>({ ...pre,password : e.target.value}))}}
              />
            </div>
            <div className="col-12">
                <h2>Upload the Grade Cards</h2>
            </div>
            <div className="col-6 input-group mb-3 ">
              <label className="input-group-text" for="inputGroupFile01">
                Semester 1
              </label>
              <input type="file" className="form-control" id="inputGroupFile01" onChange={e=> setGradeCards([...gradeCards,e.target.files[0]])}/>
            </div>
            <div className="col-6 input-group mb-3 ">
              <label className="input-group-text" for="inputGroupFile01">
                Semester 2
              </label>
              <input type="file" className="form-control" id="inputGroupFile01" onChange={e=> setGradeCards([...gradeCards,e.target.files[0]])} />
            </div>
            <div className="col-6 input-group mb-3 ">
              <label className="input-group-text" for="inputGroupFile01">
                Semester 3
              </label>
              <input type="file" className="form-control" id="inputGroupFile01" onChange={e=> setGradeCards([...gradeCards,e.target.files[0]])}/>
            </div>
            <div className="col-6 input-group mb-3 ">
              <label className="input-group-text" for="inputGroupFile01">
                Semester 4
              </label>
              <input type="file" className="form-control" id="inputGroupFile01" onChange={e=> setGradeCards([...gradeCards,e.target.files[0]])} />
            </div>
            <div className="col-6 input-group mb-3 ">
              <label className="input-group-text" for="inputGroupFile01">
                Semester 5
              </label>
              <input type="file" className="form-control" id="inputGroupFile01" onChange={e=> setGradeCards([...gradeCards,e.target.files[0]])} />
            </div>
            <div className="col-6 input-group mb-3 ">
              <label className="input-group-text" for="inputGroupFile01">
                Semester 6
              </label>
              <input type="file" className="form-control" id="inputGroupFile01" onChange={e=> setGradeCards([...gradeCards,e.target.files[0]])} />
            </div>
            <div className="col-6 input-group mb-3 ">
              <label className="input-group-text" for="inputGroupFile01">
                Semester 7
              </label>
              <input type="file" className="form-control" id="inputGroupFile01" onChange={e=> setGradeCards([...gradeCards,e.target.files[0]])} />
            </div>
            <div className="col-6 input-group mb-3 ">
              <label className="input-group-text" for="inputGroupFile01">
                Semester 8
              </label>
              <input type="file" className="form-control" id="inputGroupFile01" onChange={e=> setGradeCards([...gradeCards,e.target.files[0]])}/>
            </div>


            <div className="col-12">
              <button type="submit" className="btn btn-primary" onClick={createStudent}>
                Add Student
              </button>
            </div>
          </form>
           <div>
            {student.name}// {student.department}//{student.regNo}
          </div> 
        </div>
      </div>
    </>
  );
};

export default AddStudent;
