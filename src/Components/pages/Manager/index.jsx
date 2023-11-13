import React, { useState } from 'react';
import NavBar from "../../molecules/NavBar";
import Footer from "../../molecules/Footer";
import './Manager.css';
import Swal from 'sweetalert2';
import supabase from '../../../supa/supabase/supabaseClient';


//added
const Manager = () =>{
  const [formData, setFormData] = useState({
    full_name: '',
    m_id: '',
    Personal_id: '',
    DOB: '',
    email: '',
    contact: '',
    password: '',
  });

    const showAlert = () => {
        alert("Your are successfully Registerd.");
      };
    
      const validateForm = () => {
   
        const fullName = document.getElementById('full_name').value;
        const managerId = document.getElementById('m_id').value;
        const Personal_id = document.getElementById('Personal_id').value;
        const dateOfBirth = document.getElementById('DOB').value;
        const Email = document.getElementById('email').value;
        const Contact = document.getElementById('contact').value;
        if (fullName.trim() === '') {
          alert('Please enter your full name.');
          return false;
          }
        
          if (managerId.trim() === '') {
          alert('Please enter your"manager id.');
          return false;
          }
        
          if (Personal_id.trim() === '') {
          alert('Please enter your personal id.');
          return false;
          }
          if(    dateOfBirth.trim() === '' ||
          Email.trim() === '' ||
          Contact.trim() === '')
          {
          alert('Please fill out all fields.');
          return false;
          }
          Swal.fire({
            title: 'Manager',
            text: "You've successfully registered", 
          });
    //added
          insertDataIntoSupabase();

          return false;
          
    
        };

        const insertDataIntoSupabase = async () => {
          try {
            const { data, error } = await supabase
              .from('Manager') 
              .insert([
                {
                  full_name: formData.full_name,
                  m_id: formData.m_id,
                  Personal_id: formData.Personal_id,
                  DOB: formData.DOB,
                  email: formData.email,
                  contact: formData.contact,
                  password: formData.password,
                },
              ]);
      
            if (error) {
              console.error('Error inserting data into Supabase:', error.message);
            } else {
              console.log('Data inserted into Supabase:', data);
              showAlert();
            }
          } catch (error) {
            console.error('Error connecting to Supabase:', error.message);
          }
        };

        const handleInputChange = (e) => {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value
          });
        };

       
        
        return(
        <div class="background-image4">
        <div className="manager">
        <div class="manager-container">
        <form action="/submit-form" method="POST" onSubmit={(e)=>{   
            e.preventDefault(); 
              if (validateForm()) {
                document.forms[0].submit();
          }
              }}>
          <h1 id="header_18" class="form-header" data-component="header">Manager</h1>
      <div class="form-group">
        <label for="full_name">Full Name</label>
        <input type="text" class="form-control" id="full_name" name="full_name" placeholder="Enter your full name"/>
      </div>
      <div class="form-group">
        <label for="m_id">Manager ID</label>
        <input type="text" class="form-control" id="m_id" name="m_id" placeholder="Enter your manager id"/>
      </div>
      <div class="form-group">
        <label for="Personal_id">NIC</label>
        <input type="text" class="form-control" id="Personal_id" name="Personal_id" placeholder="Enter your NIC number"/>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" name="email" placeholder="Enter your email address"/>
      </div>
      <div class="form-group">
        <label for="DOB">Date of Birth</label>
        <input type="date" class="form-control" id="DOB" name="DOB"/>
      </div>
      <div class="form-group">
        <label for="contact">Contact</label>
        <input type="contact" class="form-control" id="contact" name="contact" placeholder="Enter your contact numbers"/>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" name="password" placeholder="Enter your password"  onChange={handleInputChange}/>
      </div>
      <br/>
      <button type="submit" class="btn btn-primary" >Submit</button>
    </form>
    
    
    </div>
        </div>
        </div>
        
      
      )
    }
    

export default Manager;