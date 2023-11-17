
import react from "react"
import NavBar from "../../molecules/NavBar";
import Footer from "../../molecules/Footer";

const Loan =() =>{

return (

    <div class="login-form" id="form-container">
    <div id="form-child">
      <div class="mb-4">
        <div class="form-group form-group-1">
          <label for="personal_id" >Loan Id</label>
          <input type="text"
                 name="personal_id"
                 id="personal_id"
                 class="form-control" placeholder="Enter your loan Id number" required/>
        </div>

        <div class="form-group form-group-2">
          <label for="inputPassword" >Amount</label>
          <input type="password"
                 name="password"
                 id="password" 
                 class="form-control" placeholder="Enter your amount" required/>
        </div>
      </div>
      </div>
      </div>






)

    
}
export default Loan;