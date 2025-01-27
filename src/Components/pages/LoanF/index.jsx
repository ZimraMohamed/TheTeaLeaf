import React, { useState } from 'react';
import supabase from '../../../supa/supabase/supabaseClient';
import Loanf from './LoanF.css';



const LoanF = () => {
  
  const [formData, setFormData] = useState({
    
    l_id: '',
    Personal_id: '',
    Kg:'',
    typeF:'',
  });

  const showAlert = (message) => {
    alert(message);
  };

  const gatDataIntoSupabase = async (e) => {
    e.preventDefault();

    const personalId = document.getElementById('Personal_id').value;
    const Kg = document.getElementById('Kg').value;
    const typeF = document.getElementById('typeF').value;

    
    if ( !personalId  || !Kg || !typeF) {
      showAlert('Please fill out all fields.');
      return;
    }

    const formDataToUpdateSupabase = {
      
      Personal_id: personalId,
      Kg: Kg,
      typeF: typeF,
    };

    insertDataIntoSupabase(formDataToUpdateSupabase);
    
  };
  
  const insertDataIntoSupabase = async (formDataToUpdateSupabase) => {
    try {
      const { data, error } = await supabase.from('Fertilizer').insert([
        {
          Personal_id: formDataToUpdateSupabase.Personal_id,
          Kg: formDataToUpdateSupabase.Kg,
          typeF: formDataToUpdateSupabase.typeF,
        },
      ]);
  
      if (error) {
        alert('Error inserting data into Supabase: ' + error.message);
      } else {
        alert('Form submitted ' );
       
      }
    } catch (error) {
      console.log('Error connecting to Supabase: ' + error.message);
    }
  };

  return (
    <div className="baclroundd-imagey">
      <div className="LoanF">
        <div className="Loan-container">
          <form onSubmit={gatDataIntoSupabase}>
            <h1 className="form-header" data-component="header">
              Apply Fertilizer
            </h1>
            
            <div className="form-group">
              <label htmlFor="Personal_id">NIC</label>
              <input
                type_1="text"
                className="form-control"
                id="Personal_id"
                name="Personal_id"
                placeholder="Enter your NIC number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Kg">Weight</label>
              <input
                type_1="Kg"
                className="form-control"
                id="Kg"
                name="Kg"
                placeholder="Kg"
              />
              </div>
              <div class="form-group">
    <label for="typeF">Type</label>
    <select class="form-control" id="typeF" name="typeF">
      <option value="ERP">ERP</option>
      <option value="MOP">MOP</option>
      <option value="Urea">Urea</option>
    </select>
  </div>
            
            <br />
            <button typeF="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    

  );
};

export default LoanF;