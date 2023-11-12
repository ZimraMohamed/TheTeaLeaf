import React, { useState } from "react";
import Swal from 'sweetalert2';


const AddLocation = () => {
 
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    } else {
     
      Swal.fire({
        icon: 'error',
        title: 'Geolocation Error',
        text: 'Geolocation is not supported by this browser.',
      });
    }
  };

  return (
    
    <div>
  
      <h1><b>GeoHunt</b></h1><br/><br/>
      <p><b>Click the button to add your coordinates.</b></p><br/><br/>
      <button onClick={getLocation}>Click here</button><br/><br/>
      <p><b>Latitude:</b>{latitude}</p><br/><br/>
      <p><b>Longitude:</b>{longitude}</p>
    </div>
    
  );
};

export default AddLocation;

