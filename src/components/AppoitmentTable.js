import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PatientList from "./PatientList";

const AppoitmentTable = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("logintoken");
  if (!token) navigate("/");
  
  const { id } = jwtDecode(token);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:4000/appointment/${id}`);
      const json = await response.json();
      setData(json);
      console.log(json);
    })();
  }, []);

  return(
        data.map((item)=>{ return(<PatientList props={item} key={data.id}/>)})
    

  )
};

export default AppoitmentTable;
