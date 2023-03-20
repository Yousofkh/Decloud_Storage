import React from "react";
import "./Contact.css";
export default function Contact() {
  return (
    <div className="contact section-color w-100 vh-100 ">
                 
       
        <div className="height d-flex flex-column justify-content-center align-items-center">
        <h2 className=" me-auto offset-1 mb-3 ps-3">Get in touch</h2>
          
          <div className="row offset-1">
            <div className="col-md-5">
            <div class="form-floating">
            <input class="form-control" id="ProductName" type="text"  placeholder=" " />
            <label for="ProductName">First Name</label>
        </div>
            </div>
            <div className="col-md-5">
            <div class="form-floating">
            <input class="form-control" id="ProductName" type="text"  placeholder=" " />
            <label for="ProductName">Last Name</label>
        </div>
            </div>
            <div className="col-md-5 mt-4">
            <div class="form-floating">
            <input class="form-control" id="ProductName" type="email"  placeholder=" " />
            <label for="ProductName">Email</label>
        </div>
            </div>
            <div className="col-md-5 mt-4">
            <div class="form-floating">
            <input class="form-control" id="ProductName" type="number"  placeholder=" " />
            <label for="ProductName">Phone</label>
        </div>
            </div>
            <div className="col-md-10 mt-4">
            <div class="form-floating">
            <input class="form-control" id="ProductName" type="text"  placeholder=" " />
            <label for="ProductName">Address</label>
        </div>
            </div>
            <div className="col-md-10 mt-4">
            <div class="form-floating">
            <textarea class="form-control" id="ProductName" type="text"  placeholder=" " />
            <label for="ProductName">Type Your message .........</label>
        </div>
            </div>

          </div>
          <button className="mt-4 px-5 text-capitalize btn main-bg text-white ">submit</button>

       </div>
    </div>
  );
}
