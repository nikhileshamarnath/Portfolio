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
            <br />I graduated with a Master's in Computer Science Degree from University of Texas - Dallas.
            <br />
            <br />
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Professional Experience <strong className="purple"></strong>
            </h1>

            <h5 style={{ paddingBottom: "20px" }}>
              <strong className="purple">7-Eleven, Texas, US | Software Developer</strong>
            </h5>
            <ul>
              <li>Engineered and containerized a Promo-Engine application for deployment on ECS Fargate,
                automating promotion evaluations using a JSON Rules Engine and adopting a microservices architecture
                to enhance scalability,maintainability and modularity.</li>
              <li>Facilitated 50+ strategic merchandise partnerships for 7-Eleven, driving over 2M in revenue from customer purchases.</li>
              <li>Designed and implemented an event-driven architecture for the promotion processing pipeline using AWS SNS, SQS, and
                Lambda Functions configured with the Serverless Framework.
              </li>
              <li>DOptimized real-time promotion updates using DocumentDB change-streams and AWS Kinesis, reducing opt-in/opt-out latency
                by 30 percent and improving delivery efficiency across 10,000+ stores across North America.
              </li>
              <li>Integrated Application Performance Monitoring with New Relic, enabling real-time tracking and diagnostics to boost performance,
                reliability, and minimize downtime. Integrated AWS CloudWatch for comprehensive logging and monitoring.
              </li>
              <li>Developed and maintained CI/CD pipelines with GitLab CI, ensuring smooth and continuous deployments.
              </li>
            </ul>
            <br />
            <br />
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
