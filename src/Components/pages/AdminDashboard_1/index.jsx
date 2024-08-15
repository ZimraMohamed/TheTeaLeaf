
import React, { useEffect, useState } from 'react';
import supabase from '../../../supa/supabase/supabaseClient';

const AdminDashboard_1 = () => {
  const [locations, setLocations] = useState([]);


  useEffect(() => {
    fetchLocations();
  }, []);

  async function fetchLocations() {
    try {
      const { data, error } = await supabase.from('Fertilizer').select('Name, Personal_id, Kg, type');
      if (error) {
        console.error('Error fetching locations:', error.message);
      } else {
        setLocations(data || []);
      }
    } catch (error) {
      console.error('Error fetching locations:', error.message);
    }
  }

  

  const handleDelete = async (personalId) => {
    try {
      //Delete data from Pesticides table
      
      const { error } = await supabase.from('Fertilizer').delete().eq('Personal_id', personalId);

      if (error) {
        console.error('Error deleting data:', error.message);
        return;
      }

      // fetch the updated locations after deleting
      fetchLocations();
    } catch (error) {
      console.error('Error handling delete:', error.message);
    }
  };
  

 /* useEffect(() => {
    fetchLocations();
  }, []);

  async function fetchLocations() {
    try {
      const { data, error } = await supabase.from('Fertilizer').select('Name, Personal_id, Kg, typeF');
      if (error) {
        console.error('Error fetching locations:', error.message);
      } else {
        setLocations(data || []);
      }
    } catch (error) {
      console.error('Error fetching locations:', error.message);
    }
  }*/

  return (
    <div className="background-D">
      <div className='locate'>
        <h1>Fertilizer Order</h1>

        <table>
          <thead>
            <tr>
              <th>Personal id</th>
              <th>Name</th>
              <th>Weight</th>
              <th>Type</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location) => (
              <tr key={location.Personal_id}>
                <td>{location.Personal_id}</td>
                <td>{location.Name}</td>
                <td>{location.Kg}</td>
                <td>{location.typeF}</td>
             
                <td>
                  <button onClick={() => handleDelete(location.Personal_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard_1;

