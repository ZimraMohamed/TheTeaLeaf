import react from "react"
import NavBar from "../../molecules/NavBar";
import Footer from "../../molecules/Footer";
import './Customer.css';
import Swal from 'sweetalert2';

const Customer = () =>{
    const showAlert = () => {
        alert("Your are successfully Registerd.");
      };
    
      const validateForm = () => {
   
        const fullName = document.getElementById('full_name').value;
        const managerId = document.getElementById('customer-id').value;
        const Nic = document.getElementById('nic').value;
        const dateOfBirth = document.getElementById('dob').value;
        const Email = document.getElementById('email').value;
        const Contact = document.getElementById('contact').value;
        if (fullName.trim() === '') {
          alert('Please enter your full name.');
          return false;
          }
        
          if (managerId.trim() === '') {
          alert('Please enter your customer-id.');
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
            title: 'Customer',
            text: "You've successfully registered", 
          });
    
          return false;
          
    
        };
    
      return(
        <div class="background-image5">
        <div className="customer">
        <div class="customer-container">
          <form action="/submit-form" method="post" onSubmit={(e)=>{   
            e.preventDefault(); 
              if (validateForm()) {
                document.forms[0].submit();
          }
              }}>
          <h1 id="header_18" class="form-header" data-component="header">Customer</h1>
      <div class="form-group">
        <label for="full_name">Full Name</label>
        <input type="text" class="form-control" id="full_name" name="full_name" placeholder="Enter your full name"/>
      </div>
      <div class="form-group">
        <label for="customer-id">Customer ID</label>
        <input type="text" class="form-control" id="customer-id" name="customer-id" placeholder="Enter your customer id"/>
      </div>
      <div class="form-group">
        <label for="nic">NIC</label>
        <input type="tel" class="form-control" id="nic" name="nic" placeholder="Enter your NIC number"/>
      </div>
      <div class="form-group">
        <label for="company-name">Company Name</label>
        <input type="company-name" class="form-control" id="company-name" name="company-name" placeholder="Enter your company name"/>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" name="email" placeholder="Enter your email address"/>
      </div>
      <div class="form-group">
        <label for="dob">Date of Birth</label>
        <input type="date" class="form-control" id="dob" name="dob"/>
      </div>
      <div class="form-group">
        <label for="country">Country</label>
        <input type="country" class="form-control" id="country" name="country" placeholder="Enter the country "/>
      </div>
      <div class="form-group">
        <label for="contact">Contact Number</label>
        <input type="contact" class="form-control" id="contact" name="contact" placeholder="Enter the contact number "/>
      </div>
      <div class="form-group">
    <label for="time">Country</label>
    <select class="form-control" id="type" name="type">
      <option value="local">from SriLanka</option>
      <option value="foreign">from another country</option>
    </select>
  </div>
      <br/>
      <button type="submit" class="btn btn-primary" onClick={validateForm}>Submit</button>
    </form>
        </div>
        </div>
        </div>
      )
    }

export default Customer;