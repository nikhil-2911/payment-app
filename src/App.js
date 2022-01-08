import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./firebase";

// Components
import Home from "./component/Home";
import Payment from "./component/Payment";
import Appbar from "./component/Appbar";
import Login from "./component/Login";
import Register from "./component/Register";

const App = () => {
  return (
    <>
      <Appbar />
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "80vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Container>
    </>
  );
};

export default App;
