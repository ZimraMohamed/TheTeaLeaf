import react from "react"
import NavBar from "../../molecules/NavBar";
import Footer from "../../molecules/Footer";
import './Supplier.css';

import Swal from 'sweetalert2';

const supplier = () =>{

      const showAlert = () => {
          alert("Your are successfully Registerd.");
        };
      
        const validateForm = () => {
     
          const fullName = document.getElementById('full_name').value;
          const supplierId = document.getElementById('supplier-id').value;
          const Nic = document.getElementById('nic').value;
          const dateOfBirth = document.getElementById('dob').value;
          const Email = document.getElementById('email').value;
          const Contact = document.getElementById('contact').value;
          if (fullName.trim() === '') {
            alert('Please enter your full name.');
            return false;
            }
          
            if (supplierId.trim() === '') {
            alert('Please enter your supplier-id.');
            return false;
            }
          
            if (Nic.trim() === '') {
            alert('Please enter your nic.');
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
              title: 'supplier',
              text: "You've successfully registered", 
            });
      
            return false;
            
      
          };
      
        return(
          <div class="background-image4">
          <div className="supplier">
          <div class="supplier-container">
            <form action="/submit-form" method="post" onSubmit={(e)=>{   
              e.preventDefault(); 
                if (validateForm()) {
                  document.forms[0].submit();
            }
                }}>
            <h1 id="header_18" class="form-header" data-component="header">Supplier</h1>
        <div class="form-group">
          <label for="full_name">Full Name</label>
          <input type="text" class="form-control" id="full_name" name="full_name" placeholder="Enter your full name"/>
        </div>
        <div class="form-group">
          <label for="supplier-id">supplier ID</label>
          <input type="text" class="form-control" id="supplier-id" name="supplier-id" placeholder="Enter your supplier-id"/>
        </div>
        <div class="form-group">
          <label for="nic">NIC</label>
          <input type="tel" class="form-control" id="nic" name="nic" placeholder="Enter your NIC number"/>
        </div>
        
        <div class="form-group">
          <label for="contact">Email</label>
          <input type="contact" class="form-control" id="contact" name="contact" placeholder="Enter your contact numbers"/>
        </div>
        <div class="form-group">
          <label for="dob">Date of Birth</label>
          <input type="date" class="form-control" id="dob" name="dob"/>
        </div>
        <div class="form-group">
        </div>
       <input type="hidden" id="latitude" name="latitude"/>
       <input type="hidden" id="longitude" name="longitude"/>
       <div id="map-placeholder"></div>
       <br/>
        <button type="submit" class="btn btn-primary" onClick={validateForm}>Submit</button>
        <p className="link">
                <a href="AddLocation"><center>Add Location here</center></a>
              </p>
    
      </form>
          </div>
          </div>
          </div>
        )
      }
      

export default supplier;