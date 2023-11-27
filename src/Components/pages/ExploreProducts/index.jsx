import NavBar from "../../molecules/NavBar";
import Footer from "../../molecules/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import React from "react";
import blackTea from './blackTea.jpg';
import greenTea from './greenTea.jpg';
import teaBags from './teaBags.jpg';
import blackTeaMini from './blackTeaMini.jpg';
import greenTeaMini from './greenTeaMini.PNG';
import all from './all.jpg';

const ExploreProducts = () =>{
    
return(
<div>
<div class="row row-cols-1 row-cols-md-3 g-4">
<div class="col">
    <div class="card">
      <div class="card-body">
      <img src={all} alt="theTeaLeaf" width="300px" height="300px" />
        <h5 class="card-title">Discover Your Tea</h5>
        <p class="card-text">
         Explore our premium tea collection, carefully curated for tea lovers. From our gardens to your cup, savor the richness of handpicked tea leaves. Elevate your tea experience and find your perfect blend. Buy your tea today and savor the essence of quality and flavor.</p>
        </div>
      </div>
    </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
      <img src={blackTea} alt="theTeaLeaf" width="300px" height="300px" />
      
        <h5 class="card-title">Black Tea</h5>
        <p class="card-text">Price: 850 Rs<br/>Weight: 500g</p>
        <br/><br/>
        <a href="#" class="btn btn-primary">Buy Now</a>
      </div>
      </div>
    </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
      <img src={teaBags} alt="theTeaLeaf" width="300px" height="300px" />
        <h5 class="card-title">Tea Bags</h5>
        <p class="card-text">Price: 900 Rs<br/>Weight: 500g</p>
        <br/><br/>
        <a href="#" class="btn btn-primary">Buy Now</a>
        </div>
      </div>
    </div>
    <div class="col">
    <div class="card">
      <div class="card-body">
      <img src={blackTeaMini} alt="theTeaLeaf" width="300px" height="300px" />
        <h5 class="card-title">Black Tea Mini </h5>
        <p class="card-text">Price: 650 Rs<br/>Weight: 200g</p>
          <a href="#" class="btn btn-primary">Buy Now</a>
        </div>
      </div>
    </div>
    <div class="col">
    <div class="card">
      <div class="card-body">
      <img src={greenTeaMini} alt="theTeaLeaf" width="300px" height="300px" />
        <h5 class="card-title">Green Tea Mini</h5>
        <p class="card-text">Price: 500 Rs<br/>Weight: 200g</p>
        <a href="#" class="btn btn-primary">Buy Now </a>
        </div>
      </div>
    </div>
    <div class="col">
    <div class="card">
      <div class="card-body">
      <img src={greenTea} alt="theTeaLeaf" width="300px" height="300px" />
        <h5 class="card-title">Green Tea</h5>
        <p class="card-text">Price: 900 Rs<br/>Weight: 500g</p>
        <a href="#" class="btn btn-primary">Buy Now</a>
        </div>
      </div>
    </div>
  </div>
</div>

)
}

export default ExploreProducts;