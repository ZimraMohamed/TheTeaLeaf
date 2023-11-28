import NavBar from './Components/molecules/NavBar';
import Footer from './Components/molecules/Footer';
import Home from './Components/pages/Home';
import Login from './Components/pages/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Manager from './Components/pages/Manager';
import Supplier from './Components/pages/Supplier'
import Signup from './Components/pages/Signup';
import PartnerProfiles from './Components/pages/PartnerProfiles';
import BuyNow from './Components/pages/BuyNow';
import Customer from './Components/pages/Customer';
import ExploreProducts from './Components/pages/ExploreProducts';
import AddLocation from './Components/pages/AddLocation';
import Location from './Components/pages/Location';
import Monetary from './Components/pages/Monetary';
import Pesticide from './Components/pages/Pesticide';
import Fertilizer from './Components/pages/Fertilizer';
import Loan from './Components/pages/Loan';
import LoanF from './Components/pages/LoanF';
import AdminDashboard from './Components/pages/AdminDashboard';
import AdminDashboard_1 from './Components/pages/AdminDashboard_1';
import AdminDashboard_2 from './Components/pages/AdminDashboard_2';




function App() {
  return (
    
      <div className="App">
      <NavBar/>
      <BrowserRouter>
      <Routes>
      
      <Route path="/" element={<Home />} />

        <Route path="Login" element={<Login />} />
        <Route path="Customer" element={<Customer/>}/>
        <Route path="Manager" element={<Manager/>}/>
        <Route path="Supplier" element={<Supplier/>}/>
        <Route path="Signup" element={<Signup/>}/>
        <Route path="partner" element={<PartnerProfiles/>}/>
        <Route path="ExploreProducts" element={<ExploreProducts/>}/>
        <Route path="buyNow" element={<BuyNow/>}/>
        <Route path="AddLocation" element={<AddLocation/>}/>
        <Route path="Location" element={<Location/>}/>
        <Route path="Monetary" element={<Monetary/>}/>
        <Route path="Pesticide" element={<Pesticide/>}/>
        <Route path="Fertilizer" element={<Fertilizer/>}/>
        <Route path="Loan" element={<Loan/>}/>
        <Route path="LoanF" element={<LoanF/>}/>
        <Route path="AdminDashboard" element={<AdminDashboard/>}/>
        <Route path="AdminDashboard_1" element={<AdminDashboard_1/>}/>
        <Route path="AdminDashboard_2" element={<AdminDashboard_2/>}/>
        
        
        
        
       </Routes>
      </BrowserRouter>
      <Footer/>
   
    </div>
  );
}


export default App;