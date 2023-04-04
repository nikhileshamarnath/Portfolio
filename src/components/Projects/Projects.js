import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

import helmet from "../../Assets/helmet.png";
import Leukemia from "../../Assets/leukemia.png";
import face from "../../Assets/face_recog.png";
import pothole from "../../Assets/pothole.png";
import face_mask from "../../Assets/face_mask.png";
import linux from "../../Assets/linux.png";
import airbnb from "../../Assets/airbnb.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={airbnb}
              isBlog={false}
              title="Designed Airbnb Booking System"
              description="Developed a web application in MERN Stack that allows users to search, host, bookmark and reserve and cancel a property.Implemented CRUD operations in MongoDB, user authentication, and REST API in Nodejs to support ajax calls from React."
              ghLink="https://github.com/Nikhilesh10/Airbnb"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={linux}
              isBlog={false}
              title="Encrypted File System"
              description="Designed and implemented an encrypted file system in Java using SHA256 hashing for password validation, encryption of file chunks, and HMAC generation for data integrity. Optimized file operations for efficient read/write performance and encryption/decryption."
              ghLink="https://github.com/Nikhilesh10/Encrypted-File-System"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pothole}
              isBlog={false}
              title="Pothole Detection and Mapping Android Application"
              description="Developed an android application that detects the presence of potholes using Inception V3 and Transfer Learning and plots the location of the detected potholes in maps.
              The android application can also notify the local authorities."
              ghLink="https://github.com/Nikhilesh10/PotholeDetector"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={face_mask}
              isBlog={false}
              title="Face mask Detection"
              description="Implemented a CNN based on Mobile Net V2 architecture to detect presence of a face mask. Achieved 96% test accuracy. Deployed
              a contactless temperature sensor to measure the body temperature.The integrated system can deny access to individuals without a face mask and those with a high body temperature, making it an effective tool in preventing the spread of infectious diseases."
              ghLink="https://github.com/Nikhilesh10/CV_PROJ"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Leukemia}
              isBlog={false}
              title="Computer Assisted Leukemia Detection"
              description="Implemented ALL (Acute Lymphoblastic Leukemia), AML(Acute Myeloid Leukemia) detection and counting of the blood cells from
              microscopic blood images by using image preprocessing techniques for Diagnosis of Blood Cancer.
              Used SVM Algorithm to distinguish between healthy and Cancer Cells and KNN Algorithm to further classify cancer cells into AML
              or ALL type of Leukemia."
              ghLink="https://github.com/Nikhilesh10/"
              // demoLink="https://github.com/Nikhilesh10/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={face}
              isBlog={false}
              title="Face Recognition based Attendance System"
              description="Developed a web-application using Python Flask that overcomes the hazels faced by faculties in a classroom. Deployed a Face Recognition based attendance system on Raspberry Pi to capture live attendance. Designed an NLP based Answer script evaluator.The integrated system can deny access to individuals without a face mask and those with a high body temperature"
              ghLink="https://github.com/Nikhilesh10/Face-Recognition-Based-AttendanceSystem"
               
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
