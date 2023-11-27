import 'bootstrap/dist/css/bootstrap.min.css';
import './login1.css';
import React, { useState } from "react";
import supabase from '../../../supa/supabase/supabaseClient';

const Login = () => {
  const [personalId, setPersonalId] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleSuccessfulLogin = async () => {
    try {
      
      const { data, error } = await supabase
        .from('Login') 
        .insert([
          {
            Personal_id: personalId,
            password: password,
          },
        ]);

      if (error) {
        throw error;
      }

      
      window.alert("Login successful!");

      
    } catch (error) {
      console.error("Login information insertion error", error.message);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      
      const managerQuery = await supabase
        .from('Manager')
        .select('*')
        .eq('Personal_id', personalId)
        .eq('password', password)
        .single();

      const supplierQuery = await supabase
        .from('Supplier')
        .select('*')
        .eq('Personal_id', personalId)
        .eq('password', password)
        .single();

      const customerQuery = await supabase
        .from('Customer')
        .select('*')
        .eq('Personal_id', personalId)
        .eq('password', password)
        .single();

      if (managerQuery.data || supplierQuery.data || customerQuery.data) {
       
        await handleSuccessfulLogin();
      } else {
        setLoginError("Invalid personal ID or password");
        window.alert("Incorrect personal ID or password. Please try again.");
      }
    } catch (error) {
      console.error("Login error", error.message);
    }
  };

  return (
    <div className="background-image10">
      <div className="login-container" id="login-container">
        <form className="form-signin text-center" onSubmit={handleSubmit} id="form-signin">
          <div className="login-form" id="form-container">
            <div id="form-child">
              <div className="mb-4">
                <div className="form-group form-group-1">
                  <label htmlFor="personalId">Personal Id</label>
                  <input
                    type="text"
                    name="personalId"
                    id="personalId"
                    className="form-control"
                    placeholder="Enter your personal Id number"
                    required
                    value={personalId}
                    onChange={(e) => setPersonalId(e.target.value)}
                  />
                </div>

                <div className="form-group form-group-2">
                  <label htmlFor="inputPassword">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter your password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="alert alert-danger" id="login-error">
                {loginError && <i className="fas fa-exclamation-circle"></i>} {loginError}
              </div>

              <button className="btn btn-outline-light btn-lg btn-block form-group-3" type="submit">
                Log in
              </button>
              <br />
              <br />
              <p className="link">
                <a href="Signup">
                  <center>Don't have an account? Sign Up here</center>
                </a>
              </p>
           
            </div>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Login;
