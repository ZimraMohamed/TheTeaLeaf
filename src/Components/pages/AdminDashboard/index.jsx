import React, { useEffect, useState } from 'react';
import supabase from '../../../supa/supabase/supabaseClient';
import  './AdminDashboard.css';

const AdminDashboard = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchLocations();
  }, []);

  async function fetchLocations() {
    try {
      const { data, error } = await supabase.from('Pesticides').select('Personal_id, l, type');
      if (error) {
        console.error('Error fetching locations:', error.message);
      } else {
        setLocations(data || []);
      }
    } catch (error) {
      console.error('Error fetching locations:', error.message);
    }
  }

  return (

    <div className="background-D">
      <div className='locate'>
        <h1>Pesticide Order</h1>

        <table>
          <thead>
            <tr>
              <th>Personal id</th>
              <th>Capacity</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location) => (
              <tr key={location.Personal_id}>
                <td>{location.Personal_id}</td>
                <td>{location.l}</td>
                <td>{location.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default AdminDashboard;

