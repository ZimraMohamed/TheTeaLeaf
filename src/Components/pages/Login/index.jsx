
import 'bootstrap/dist/css/bootstrap.min.css';
import './login1.css';
import React, { useState } from "react";
import supabase from '../../../supa/supabase/supabaseClient';

const Login = () => {

  function handleSubmit() {
    
   }
    return (
      <form onSubmit={handleSubmit}>
      <div class="background-image10">
      <div class="login-container" id="login-container">
  <form class="form-signin text-center" onsubmit="login(event)" 
        id="form-signin">
    <fieldset id="form-fieldset">
      <div class="d-flex mb-3 justify-content-start logo-container" 
           id="logo-container">
        <div id="login-success-bubble">
          Hi, Kalle!
          <div class="arrow"></div>
        </div>
          <div id="logo" class="letter-container slide-in">
            <img src="" class="letter-1 letter"/>
            <img src="" class="letter-2 letter"/>
            <img src="" class="letter-3 letter"/>
            <img src="" class="letter-4 letter"/>
            <img src="" class="letter-5 letter"/>
          </div>
        
        <div class="ml-4 text-white d-flex align-items-center loading-spinner"
             id="loading-spinner">
          <i class="fas fa-pulse fa-spinner fa-2x"></i>
        </div>
      </div>

      <div class="login-form" id="form-container">
        <div id="form-child">
          <div class="mb-4">
            <div class="form-group form-group-1">
              <label for="personal_id" >Personal Id</label>
              <input type="text"
                     name="personal_id"
                     id="personal_id"
                     class="form-control" placeholder="Enter your personal Id number" required/>
            </div>

            <div class="form-group form-group-2">
              <label for="inputPassword" >Password</label>
              <input type="password"
                     name="password"
                     id="password" 
                     class="form-control" placeholder="Enter your password" required/>
            </div>
          </div>

          <div class="alert alert-danger" 
               id="login-error">
            <i class="fas fa-exclamation-circle"></i> 
          </div>

          <button class="btn btn-outline-light btn-lg btn-block form-group-3" type="submit">Log in</button><br/><br/>
          <p className="link">
                <a href="Signup"><center>Don't have account Sign Up here</center></a>
              </p>
    
        </div>
      </div>
    </fieldset>
  </form>
  </div>
</div>
</form>

)
}

export default Login;
