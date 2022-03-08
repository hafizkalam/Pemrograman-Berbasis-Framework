import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './LoginComponent.css';

export default function LoginComponent() {
  return (
    <div style={{ marginTop: "100px" }}>
      <center><h2 className="login-p"> Form Login</h2></center>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 border">
            <center><h3>Tugas Pertemuan Ketiga</h3></center>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="email" placeholder="Enter Username" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" />
              </Form.Group>
              <button type="submit" className="btn btn-color px-5 mb-2 w-100 success">Login</button>
              <br></br>
              <br></br>
              <div className="rememberme ">
                <div className="w-100 mb-4">
                  <input className="checkbox" type="checkbox" id="check" />
                  <h7> <b>Remember me</b></h7>
                </div>
              </div>
              <center><Button variant="danger" className="px-2 mb-3 w-40" type="submit">
                Cancel
              </Button></center>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}