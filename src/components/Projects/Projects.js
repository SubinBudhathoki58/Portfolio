import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import jersey from "../../Assets/Projects/jersey.png";
import contact from "../../Assets/Projects/contact.png";
import tictactoe from "../../Assets/Projects/tictactoe.png";
import portfolio from "../../Assets/Projects/portfolio.png";
// import adult from '../../Assets/Projects/adult.jpeg'; 
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
              imgPath={jersey}
              isBlog={false}
              title="Jersey Ecommerce"
              description="A Place to Buy Jerseys  . Developed Using React "
              ghLink="https://github.com/SubinBudhathoki58/e-commerce"
              demoLink="jersey-ecommerce.netlify.app "
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={contact}
              isBlog={false}
              title="Contact Manager App "
              description="The Contact Manager App is a simple yet functional React.js application that allows users to add and delete contacts with their names and email addresses. Built with a clean and intuitive UI, the app ensures an efficient and user-friendly experience for managing contacts. "
              ghLink="https://github.com/SubinBudhathoki58/Contact-Manager"
              demoLink="contact-managee.netlify.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic Tac Toe"
              description="The Tic Tac Toe Game is a classic two-player game built using React.js, featuring an interactive and responsive user interface. The game allows players to take turns marking X or O on a 3x3 grid, with real-time win detection and game reset functionality."
              ghLink="https://github.com/bishal189/foodonline"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Personal Portfolio"
              description="Personal Portfolio made from react"
              ghLink="https://github.com/SubinBudhathoki58/Portfolio"
              demoLink="https://subin-portfolio.netlify.app"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
