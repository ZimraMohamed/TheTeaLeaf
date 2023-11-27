
import React from "react";
import Swal from 'sweetalert2';

const Location = () => {
  const validateForm = () => {
    const sup_id = document.getElementById('sup_id').value;
    const location_id = document.getElementById('location_id').value;
    const longitude = document.getElementById('longitude').value;
    const latitude = document.getElementById('latitude').value;

    if (sup_id.trim() === '') {
      alert('Please enter your Supplier Id.');
      return false;
    }

    if (location_id.trim() === '') {
      alert('Please enter your location id.');
      return false;
    }

    if (longitude.trim() === '') {
      alert('Please enter your longitude.');
      return false;
    }

    if (latitude.trim() === '') {
      alert('Please enter your latitude.');
      return false;
    }

    // If all fields are filled, show success message with SweetAlert
    Swal.fire({
      title: 'Location',
      text: "You've successfully registered",
      icon: 'success'
    });

    return true;
  };

  return (
    <div className="background-image4">
      <div className="location">
        <div className="location-container">
          <form action="/submit-form" method="POST" onSubmit={(e) => {
            e.preventDefault();
            if (validateForm()) {
              document.forms[0].submit();
            }
          }}>
            <h1 id="header_18" className="form-header" data-component="header">Location</h1>
            <div className="form-group">
              <label htmlFor="sup_id">Supplier Id</label>
              <input type="text" className="form-control" id="sup_id" name="sup_id" placeholder="Enter your Supplier Id" />
            </div>
            <div className="form-group">
              <label htmlFor="location_id">Location ID</label>
              <input type="text" className="form-control" id="location_id" name="location_id" placeholder="Enter your location id" />
            </div>
            <div className="form-group">
              <label htmlFor="longitude">Longitude</label>
              <input type="text" className="form-control" id="longitude" name="longitude" placeholder="Enter your Longitude" />
            </div>
            <div className="form-group">
              <label htmlFor="latitude">Latitude</label>
              <input type="text" className="form-control" id="latitude" name="latitude" placeholder="Enter your latitude" />
            </div>
            <br />
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Location;
