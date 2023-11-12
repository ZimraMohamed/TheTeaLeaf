import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './PartnerProfiles.css';



const PartnerProfiles = () =>{
    const showAlert = () => {
        alert("Your are successfully Submited.");
      };
     
return(
<div>
<div class="background-image-a">
    <form class="custom-form">
<div class="mb-3">
  <h4>Tea Leaf Supply Lot</h4>
</div>
<div class="mb-4">
  <label for="status" class="form-label">Today my lot :</label>
  <input type="userId" class="form-control custom-input-width" id="status" aria-describedby="UIHelp"placeholder="Enter your User Id"/>
</div>
<div class="mb-3">
  <label for="sup-id" class="form-label">User Id</label>
  <input type="userId" class="form-control custom-input-width" id="sup-id" aria-describedby="UIHelp"placeholder="Enter your User Id"/>
</div>
<div class="mb-3">
  <label for="lot-id" class="form-label">Lot Id</label>
  <input type="userId" class="form-control custom-input-width" id="lot-id" aria-describedby="UIHelp"placeholder="Enter your User Id"/>
</div>
<div class="mb-3">
  <label for="exampleInputAmount" class="form-label">Amount</label>
  <input type="amount" class="form-control custom-input-width" id="exampleInputAmount" aria-describedby="AmountHelp"placeholder="Enter your NIC Amount"/>
</div>
<div class="mb-3">
  <label for="weight" class="form-label">Weight</label>
  <input type="weight" class="form-control custom-input-width" id="weight" aria-describedby="WeightHelp"placeholder="Enter your Weight"/>
</div>

<div class="mb-3">
  <label for="pulucked-date" class="form-label">Plucked Date</label>
  <input type="puluckedDate" class="form-control custom-input-width" id="pulucked-date" aria-describedby="PDHelp" placeholder="Enter your Plucked Date"/>
</div>

<div class="mb-3">
  <label for="total" class="form-label">Total</label>
  <input type="total" class="form-control custom-input-width" id="total" aria-describedby="TotalHelp" placeholder="Enter your Total"/>
</div>


<br /><br />
<button type="button" className="btn btn-primary" onClick={showAlert}>
Submit
 </button>

</form>
</div>
</div>
)
}

export default PartnerProfiles;