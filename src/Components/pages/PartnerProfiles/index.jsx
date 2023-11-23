import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './PartnerProfiles.css';
import Swal from 'sweetalert2';
import supabase from '../../../supa/supabase/supabaseClient';


const PartnerProfile = () => {
  
  const [formData, setFormData] = useState({
    lot_id: '',
    total: '',
    weight: '',
    email: '',
    plucked_date: '',
    Personal_id: '',
    
   
  });

  const showAlert = (message) => {
    alert(message);
  };

  const gatDataIntoSupabase = async (e) => {
    e.preventDefault();


    const lot_id = document.getElementById('lot_id').value;
    const total = document.getElementById('total').value;
    const email = document.getElementById('email').value;
    const weight = document.getElementById('weight').value;
    const plucked_date = document.getElementById('plucked_date').value;
    const Personal_id = document.getElementById('Personal_id').value;

    
    if (!lot_id || !total || !email || !plucked_date || !Personal_id || !weight) {
      showAlert('Please fill out all fields.');
      return;
    }


    const formDataToUpdateSupabase = {

      lot_id: lot_id,
      total: total,
      plucked_date: new Date(plucked_date).toISOString(),
      email: email,
      Personal_id: Personal_id,
      weight: weight,
    };

    insertDataIntoSupabase(formDataToUpdateSupabase);

    };
  

  const insertDataIntoSupabase = async (formDataToUpdateSupabase) => {
    try {
      const { data, error } = await supabase.from('Tea_leaf_supplier_lot').insert([
        {
          lot_id: formDataToUpdateSupabase.lot_id,
          total: formDataToUpdateSupabase.total,
          plucked_date: formDataToUpdateSupabase.plucked_date,
          email: formDataToUpdateSupabase.email,
          Personal_id: formDataToUpdateSupabase.Personal_id,
          weight: formDataToUpdateSupabase.weight,
        },
      ]);

      if (error) {
        alert('Error inserting data into Supabase: ' + error.message);
      } else {
        alert('Data inserted into Supabase: ' + JSON.stringify(data));
        showAlert('You are successfully registered.');
      }
    } catch (error) {
      console.log('Error connecting to Supabase: ' + error.message);

    }
  };
  return (
    <div className="background-image-a">
      <div className="manager">
        <div className="manager-container">
          <form onSubmit={gatDataIntoSupabase}>
            <h1 className="form-header" data-component="header">
              Tea Leaf Supply Lot
            </h1>
            <div className="form-group">
              <label htmlFor="Personal_id">NIC</label>
              <input
                type="Personal_id"
                className="form-control"
                id="Personal_id"
                name="Personal_id"
                placeholder="Enter your NIC number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lot_id">Lot id</label>
              <input
                type="text"
                className="form-control"
                id="lot_id"
                name="lot_id"
                placeholder="Enter your lot id"
              />
            </div>
            <div className="form-group">
              <label htmlFor="total">Total</label>
              <input
                type="total"
                className="form-control"
                id="total"
                name="total"
                placeholder="Enter your number of tea bags"
              />
                <div className="form-group">
              <label htmlFor="weight">Weight</label>
              <input
                type="weight"
                className="form-control"
                id="weight"
                name="weight"
                placeholder="Enter your weight"
              />
            </div>
            </div>
            <div className="form-group">
              <label htmlFor="plucked_date">Plucked date</label>
              <input type="date" className="form-control" id="plucked_date" name="plucked_date" />
            </div>
        
            <div className="form-group">
              <label htmlFor="email">email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <br />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PartnerProfile;