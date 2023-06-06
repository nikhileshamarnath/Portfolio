import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Stock from "../../Assets/stock.jpeg";
import pothole from "../../Assets/pothole.png";
import face_mask from "../../Assets/face_mask.png";
import linux from "../../Assets/linux.png";
import airbnb from "../../Assets/airbnb.png";
import reddit from "../../Assets/reddit.webp";
import task from "../../Assets/task.jpg";
import movie from "../../Assets/movie.jpg"

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
              imgPath={task}
              isBlog={false}
              title="Task Tracking Application"
              description="Designed and developed a Task Tracking micro-service full stack application with login, create, update, and delete tasks.
              Implemented REST APIs following MVC architecture and JWT Authentication.
              Containerized the services using Docker and deployed it on a Kubernetes cluster.
              "
              ghLink="https://github.com/Nikhilesh10/TaskTrackingApp-Back-End"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={airbnb}
              isBlog={false}
              title="Airbnb Booking System"
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
              imgPath={reddit}
              isBlog={false}
              title="Real-time NER of Reddit Comments"
              description="Developed a Python application with Reddit Python SDK to stream subreddit comments and push to Kafka.
              Used PySpark’s streaming feature to filter named entities from topic comments using spacy and push to LogStash.
              Created dashboard for visualization of the named entities in Kibana to analyze the trends in that subreddit."
              ghLink="https://github.com/Nikhilesh10/Real-time-NER-of-Reddit-Comments"
              // demoLink="https://github.com/Nikhilesh10/"
              
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Stock}
              isBlog={false}
              title="Live Stock Market Prediction"
              description="Developed a Long Short-Term Memory (LSTM) model for stock market analysis using Yahoo time series data.
              Utilized Yahoo API to stream live stock data to Kafka topic for real-time prediction and training.
              Utilized Matplotlib to visualize the actual and predicted stock values obtained from the LSTM model for stock market analysis."
              ghLink="https://github.com/"
               
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
              description="Implemented a CNN based on Mobile Net V2 architecture to detect presence of a face mask. Achieved 96% test accuracy. 
              "
              ghLink="https://github.com/Nikhilesh10/CV_PROJ"
              
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie Search Engine"
              description="Built a movie search engine using plot summaries.
              Utilized NLTK for stop-word removal and named entity extraction.
              Implemented Tf-Idf and Cosine Similarity algorithms using MapReduce to find Document Correlation."
              ghLink="https://github.com/Nikhilesh10/Movie-Search-Engine"
               
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
