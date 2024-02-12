import React, {useEffect, useState}from 'react'
import { useNavigate, useParams} from 'react-router-dom';
import { server } from './Store';

const Update = () => {
    const[topic,setTopic]=useState("");
    const[data,setData]=useState("");
    const[error,setError]=useState("");
    const navigate=useNavigate();

    const {id}=useParams();
    
    const getSingleUserdata= async ()=>{
     try{
        const response = await fetch(`${server}/${id}`);
   
        const result =await response.json();
        if(!response.ok){
            console.log(result.error);
            setError(result.error);
        }
        if(response.ok){
            console.log(result);
            setError("");
            setTopic(result.topic);
            setData(result.data);
           
           //  navigate("/all");
        }
        } catch (error) {
        console.error("Error fetching data:", error);
      }
     };

     const handleEdit = async(e)=>{
        e.preventDefault();
    
        const updateduser={topic,data};
        
        const response = await fetch(`${server}/${id}`,{
           method:"PATCH",
           body:JSON.stringify(updateduser),
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
          setError("");
        //   setData1("");
           navigate("/read");
        }
     };

     useEffect(()=>{
       getSingleUserdata();
     },[]);
  return (
    <div className='container my-2 note2'>
        <div className="note ">
          {error && <div className="alert alert-danger" >{error}</div>}
 
          <form onSubmit={handleEdit}>
            <h1>Edit Your Data</h1>
            <input type="text" className="form-control" value={topic} onChange={(e)=> setTopic(e.target.value)}/>
            
            <h1>Notes</h1>
            <input type="text"className="form-control form-control-1" value={data} onChange={(e)=> setData(e.target.value)} />

            <button type="submit" className="btn btn-dark">Submit</button>
          </form>
      </div>
     
    </div>
  );
};

export default Update;