import React, { useState } from 'react';
 import axios from 'axios';
 import { Link } from 'react-router-dom';
 import './style.css';




 const Form = () =>{

    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword]=useState('');

    const onSubmitAll = async(e) => {
            e.preventDefault();

            try {const response = await axios.post("http://localhost:5000/api/hosting",{
                name:name,
                email:email,
                password:password,
            })
                
            console.log(response.data);
            alert('data submitted successfully')
            } catch (error) {
                console.log(error);
            }
    };

    const nameFunction = (e)=> {

        setName(e.target.value);
        console.log(e.target.value);

    };

    const emailFunction = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value);
    };

    const passwordFunction = (e) => {
        setPassword(e.target.value);
        console.log(e.target.value);
    };

    return(
        <div style={{textAlign:'center',marginTop:"10rem"}}>
            <h1>Register</h1>
            <form onSubmit={onSubmitAll}>
                <div>
                    <input type='text' id='name' onChange={nameFunction} placeholder='Name'/>
                </div>
                <br/>
                <div>
                    <input type='email' id='email' onChange={emailFunction} placeholder='email' />
                </div>
                <br/>
                <div>
                    <input type='password' id='password' onChange={passwordFunction} placeholder='password' />
                </div>
                <br/>
                <div style={{display:'flex',textAlign:'center',gap:"1rem",justifyContent:'center'}}>
                    <button type='submit'>Submit</button>
                    <Link to='/details'><button>View forms</button></Link>
                </div>
            </form>

        </div>


    );


 };
export default Form;
