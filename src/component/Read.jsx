import React, { useEffect ,useState,} from 'react'
import {Link} from "react-router-dom"
import { server } from './Store';
const Read = () => {

  const[data,setData]=useState();
  const[error,setError]=useState("");

  async function getData(){
    const response= await fetch(`${server}`);

    const result=await response.json();

    if(!response.ok){
        console.log(result.error);
        setError(result.error);
    }
    if(response.ok){
        setData(result);
    }
  }
  useEffect(()=>{
    getData();
  },[]);

  
  const handleDelete = async (id) => {
    const response = await fetch(`${server}/${id}`, {
      method: "DELETE",
    });

    const result = await response.json();
    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      setError("Deleted Successfuly");
      setTimeout(() => {
        setError("");
        getData();
      }, );
    }
  };
  return (
    <div className="container my-2">
         <h1 className="heading">
            Here you never Missed!!!
         </h1>
         <div className="row">
            {data?.map((ele)=>(
            <div key={ele._id}>
             <div className="col">
             <div className="card">
              <div className="card-body">
                
                <h4 className="card-title">{ele.topic} </h4>
                <h6 className="card-subtitle mb-2 ">{ele.data}</h6>
                {/* <p className="card-subtitle" >{ele.data1}</p> */}
                <a
                  href="#"
                  className="card-link"
                  onClick={() => handleDelete(ele._id)}
                >
                  Delete
                </a>
                <Link to={`/${ele._id}`}className="card-link">
                   Edit
                 </Link>
                
               
              </div>
             </div>
             </div>
            </div> 
            ))}
         </div>
    </div>
  )
}

export default Read;