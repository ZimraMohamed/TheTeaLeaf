
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
import Loan from './Components/pages/Loan';
import Pesticide from './Components/pages/Pesticide';
import Fertilizer from './Components/pages/Fertilizer';


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
        <Route path="loan" element={<Loan/>}/>
        <Route path="Pesticide" element={<Pesticide/>}/>
        <Route path="fertilizer" element={<Fertilizer/>}/>
        
       </Routes>
      </BrowserRouter>
      <Footer/>
   
    </div>
  );
}


export default App;