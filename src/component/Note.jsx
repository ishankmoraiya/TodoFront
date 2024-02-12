import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import { server } from "./Store";


const Note=()=>{
    const[topic,setTopic]=useState("");
    const[data,setData]=useState("");
   console.log(topic,data);  
    const[error,setError]=useState("");
    const navigate = useNavigate();
    const handleSubmit= async(e)=>{
        e.preventDefault();

        const adduser={topic,data};

        const response =await fetch(`${server}`,{

           //call api
            method:"POST",
            body:JSON.stringify(adduser),
            headers:{
                "Content-Type":"application/json",
            }
        })

        const result = await response.json();

        if(!response.ok){
            console.log(result.error);
            setError(result.error);
        }
        if(response.ok){
            console.log(result);
            setError("");
            setTopic("");
            setData("");
         //   setData1("");
          navigate("/read");
          //window.location.reload();
         }

    };
    return(
       <div className="note1">
        <div className="note">
          {error && <div className="alert alert-danger" >{error}</div>}
 
          <form onSubmit={handleSubmit}>
            <h1>Topic</h1>
            <input type="text" className="form-control" value={topic} onChange={(e)=> setTopic(e.target.value)}/>
            
            <h1>Notes</h1>
            <input type="text"className="form-control form-control-1" value={data} onChange={(e)=> setData(e.target.value)} />

            <button type="submit" className="btn btn-dark">Submit</button>
          </form>

          <br />
         

        </div>
     </div> 

    );
}
export  default Note;