import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import PaymentProcess from "../PaymentProcess/PaymentProcess";

const Shipment = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const loggedInUser = useContext(UserContext);
  return (
    <div className="row m-5">
      <div className="col-md-6">
        <div>
          <form class="row g-3">
            <div class="col-md-3">
              <label for="inputEmail4" class="form-label">
                Email
              </label>
              <input type="email" class="form-control" id="inputEmail4" />
            </div>
            <br />
            {/* <div class="col-md-3">
              <label for="inputPassword4" class="form-label">
                Password
              </label>
              <input type="password" class="form-control" id="inputPassword4" />
            </div> */}
            <div class="col-4">
              <label for="inputAddress" class="form-label">
                Address
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <br />
            {/* <div class="col-6">
              <label for="inputAddress2" class="form-label">
                Address 2
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div> */}
            <div class="col-md-6">
              <label for="inputCity" class="form-label">
                City
              </label>
              <input type="text" class="form-control" id="inputCity" />
            </div>
            <br />
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                State
              </label>
              <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <br />
            <div class="col-md-2">
              <label for="inputZip" class="form-label">
                Zip
              </label>
              <input type="text" class="form-control" id="inputZip" />
            </div>
            <br />
            {/* <div class="col-6">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label class="form-check-label" for="gridCheck">
                  Check me out
                </label>
              </div>
            </div> */}
            {/* <div class="col-12">
              <button type="submit" class="btn btn-primary">
                Sign in
              </button>
            </div> */}
          </form>
        </div>
      </div>

      <div className="col-md-6">
        <PaymentProcess></PaymentProcess>
      </div>
    </div>
  );
};

export default Shipment;
