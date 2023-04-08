import React from "react";
import "../Decloud/Decloud.css";
import { Link } from "react-router-dom";
export default function Decloud() {
 
        
  return (
 
    
    
    <div className="section-color main-style w-100 vh-100 outer-space">
      <div className="container w-100">
      <div className="Decloud-Content">
        <div className="row">
            <div className="col-12 mt-3 ">
            <div className="dropdown  d-flex justify-content-end ">
  <button className="btn  dropdown-toggle border border-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu  drop-bg border-0 shadow">
    <li><Link className="dropdown-item text-capitalize drop-bg " href="#">switch Newtwork</Link></li>
    <li><Link className="dropdown-item text-capitalize drop-bg" href="#">disconnect</Link></li>
  
  </ul>
</div>
            </div>
        </div>
        <div className="row py-2">
            <div className="col-md-8 mx-auto">
           
            <input class="form-control input-color " id="Search" type="text"  placeholder=" Search files....." />
            
               </div>
            <div className="col-md-3 ">
            <input class="form-control input-color " id="Search" type="text"  placeholder=" Upload" />

            </div>
        </div>
        <div className="row">
        <div className="col-12 d-flex justify-content-center">

          <h5 className="main-color blue-color ">Your data is Your</h5>
        </div>

        </div>
       </div>
      </div>
    </div>
  );
}
