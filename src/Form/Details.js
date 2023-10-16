import React, { useEffect, useState } from 'react'
import Card from '../Form/Card';
import axios from 'axios';


function Details() {
    const [details, setDetails] = useState([]);
 

    const fetchDataServer = async() => {
      let response = await fetch(`http://localhost:5000/api/hosting`)
      let toConvertJSON = await response.json();
      setDetails(toConvertJSON);
      console.log(toConvertJSON);
    }

   

    const deleteData = async(id)=>{
      // id.preventDefault();
      try {
       await axios.delete(`http://localhost:5000/api/hosting/${id}`);
       fetchDataServer();
      } catch (error) {
        console.log(error.message);
      }
    }
  
    // const fun = (id)=>{
    //   deleteData(id)
    // }
    useEffect(() =>{
      fetchDataServer();
    },[]);
  
    return (
      <div className="App">
        {
          details.map((item) => {
            return(
              <>
              <Card data={item} demo={deleteData}   />
              </>
            )
          })
        }
      </div>
    );
}

export default Details