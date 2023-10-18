import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from "./Form/Form";
import Details from './Form/Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Update from './Form/Update';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    {
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Form/>} />
            <Route path='/details' element={<Details />} />
            <Route path='/update/:id' element={<Update />} />
        </Routes>
        </BrowserRouter>
    }
    
    </>
    // <App/>
    
  
);