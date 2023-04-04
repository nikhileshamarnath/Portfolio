import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  // AiFillHtml5
} from "react-icons/di";
import {
  
  SiNextdotjs
} from "react-icons/si";
import { SiTensorflow } from "react-icons/si";

import { FaJava } from "react-icons/fa";

import { BsGithub } from "react-icons/bs";

import { AiFillHtml5 } from "react-icons/ai";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      
      
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <FaJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsGithub />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
    </Row>
  );
}

export default Techstack;
