import React from 'react';

import Header from './components/Header';
import { useNavigate } from 'react-router-dom';








const UserDashboard = () => {

  const navigate = useNavigate();

  const addLaundry = () => {
    navigate('/laundry-details-form');
  }

  const myLaundryList = () => {
    navigate('/laundry');
  }

  return (

    <div>

      <Header />
      <main>
        <div className="container mt-4">
          <h1 className="text-center mb-4">Laundry Owner Dashboard</h1>
          <div className="row mb-3">
            <div className="d-flex justify-content-between">
              <button type="button" className="btn btn-primary me-2"onClick={addLaundry}>Add Laundry</button>
              <button type="button" className="btn btn-secondary" onClick={myLaundryList}>My Laundry List</button>
            </div>
          </div>
          {/* User Info and Service Details in Parallel */}
          <div className="row">
            {/* User Info Card */}
            <div className="col-lg-6 col-md-12 mb-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">User Info</h5>
                  <p><strong>Name:</strong> John Doe</p>
                  <p><strong>Email:</strong> john.doe@example.com</p>
                  <p><strong>Phone:</strong> 123-456-7890</p>
                  <p><strong>Address:</strong> 123 Laundry Street, Clean City</p>
                </div>
              </div>
            </div>



            {/* Service Details Card */}
            <div className="col-lg-6 col-md-12 mb-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Service Details</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Washing:</strong> $5 per kg</li>
                    <li className="list-group-item"><strong>Dry Cleaning:</strong> $10 per item</li>
                    <li className="list-group-item"><strong>Ironing:</strong> $2 per item</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="row mb-4">
            <div className="col">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Order Summary</h5>
                  <div className="row">
                    <div className="col">
                      <div className="card text-center border-success mb-3">
                        <div className="card-body">
                          <h5 className="card-title text-success">Total Orders</h5>
                          <p className="card-text display-6">120</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card text-center border-warning mb-3">
                        <div className="card-body">
                          <h5 className="card-title text-warning">Pending</h5>
                          <p className="card-text display-6">30</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card text-center border-primary mb-3">
                        <div className="card-body">
                          <h5 className="card-title text-primary">In Progress</h5>
                          <p className="card-text display-6">20</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card text-center border-secondary mb-3">
                        <div className="card-body">
                          <h5 className="card-title text-secondary">Completed</h5>
                          <p className="card-text display-6">70</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order List */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title">Order List</h5>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Alice</td>
                    <td>Pending</td>
                    <td>2025-01-01</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Bob</td>
                    <td>In Progress</td>
                    <td>2025-01-02</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Charlie</td>
                    <td>Completed</td>
                    <td>2025-01-03</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>



  );
};

export default UserDashboard;