import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

const Payment = () => {
  const [payment, setPayment] = useState("");
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
  const displayRazorPay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Faild to load Razorpay SDK");
      return;
    }
    const options = {
      key: "rzp_test_xmuQqNoI8E5CuM",
      currency: "INR",
      amount: amount * 100,
      name: "payMENT",
      description: "Thanks for making payment using RazorPay",
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert("Payment is successfull");
      },
      prefill: {
        name: "RazorPay",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    displayRazorPay(payment);
    setPayment("");
  };
  return (
    <>
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <h2 className="text-center">Payment</h2>
              <Form.Control
                type="number"
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
                placeholder="Enter payment amount"
              />
            </Form.Group>
            <Button type="submit" className="mt-2 w-100" variant="primary">
              Pay
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Payment;
