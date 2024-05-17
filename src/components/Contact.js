import React from "react";

export default function Contact() {
  return (
    <>
      <center>
        <h1 className="font-weight-bolder text-danger my-4">CONTACT US</h1>
        <div className="container my-4 mx-5 border container-fluid container-xl">
          <form className="text-bolder">
            <div className="form-group font-weight-bolder text-left">
              <label htmlFor="exampleFormControlInput1">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Tisha Verma"
              />
            </div>
            <div className="form-group font-weight-bolder text-left">
              <label htmlFor="exampleFormControlInput1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>

            <div className="form-group font-weight-bolder text-left">
              <label htmlFor="exampleFormControlInput1">Phone Number</label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>

            <div className="form-group font-weight-bolder text-left">
              <label htmlFor="exampleFormControlTextarea1">Query Box</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                placeholder="Start typing here..."
              ></textarea>
            </div>
          </form>
        </div>
      </center>
    </>
  );
}
