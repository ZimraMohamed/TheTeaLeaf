import react from "react"
import NavBar from "../../molecules/NavBar";
import Footer from "../../molecules/Footer";
import './signup.css';
import Swal from 'sweetalert2';



const Signup = () =>{
return(

  <div class="label-group" role="group" aria-label="Basic label group">
  <div class="background-image6">
    <br/><br/>
  <h2>If you are a  </h2>
  <label class="label-outline-primary" for="text">Manager :</label>
  <p class="link">
    <a href="Manager">Click here</a>
  </p>
  <br />

  <label class="label-outline-primary" for="text">Supplier :</label>
  <p class="link">
    <a href="Supplier">Click here</a>
  </p>
  <br />

  <label class="label-outline-primary" for="text">Customer :</label>
  <p class="link">
    <a href="Customer">Click here</a>
  </p>
</div>
</div>
);
};

export default Signup;
