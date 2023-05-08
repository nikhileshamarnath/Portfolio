import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nikhilesh Amarnath </span>
            from <span className="purple"> Dallas, Texas.</span>
            <br />I am a pursuing Master's in Computer Science at University of Texas - Dallas.
            <br />
            <br />
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Professional Experience <strong className="purple"></strong>
            </h1>

            <h5 style={{ paddingBottom: "20px" }}>
              <strong className="purple">Intel Corporation, Oregon, US | Software Engineer Intern</strong>
            </h5>
            <ul>
              <li>Utilized Intel Openvino toolkit to perform deep learning model inference, and validate features such as quantization, integer
                calibration, benchmarking, and optimization for CPU, GPU, and VPU.</li>
              <li>Worked on ONNXRT and WinML frameworks for validating AI/ML models.</li>
              <li>Worked on developing and porting over Linux code to Windows for the HGS Application to run different classes of workloads for
                processor core validation.
              </li>
            </ul>
            <br />
            <br />
            <h5 style={{ paddingBottom: "20px" }}>
              <strong className="purple">Open-Source Integrators, California, US | Software Engineer Intern</strong>
            </h5>
            <ul>
              <li>Conducted Data Cleaning on the Project Management System Database to model the Project Burn Rate, and identified correlations
                between different variables. Leveraged Predictive Analysis and Prescriptive Analysis techniques to forecast potential outcomes and
                recommend optimal strategies.</li>
              <li>Facilitated the process by developing a user-friendly UI using React JS, which allowed Project Managers to input project details and
                seamlessly integrate the data with the Machine Learning model. Designed and implemented an intuitive Dashboard that presented
                the predicted Project Burn Rate in a visually compelling manner.</li>
              <li>Demonstrated my proficiency in deploying and managing large-scale ERP systems by creating and deploying multiple instances of
                Odoo application for 50+ charities using Kubernetes.</li>
            </ul>
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Nikhilesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
