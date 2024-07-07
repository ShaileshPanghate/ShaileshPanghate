import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";
import p1 from "../Assets/p1.PNG";
import p2 from "../Assets/p2.PNG";
import p3 from "../Assets/p3.PNG";
import p4 from "../Assets/p4.PNG";
import p5 from "../Assets/p5.PNG";


function Projects() {
  return (
    <Container id="projects" fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} className="project-card" >
            <ProjectCards
              imgPath={p3}
              title="Nykaa clone"
              description="This is an E-Commerce website which speciaizes in selling Cosmetics and styling products. The website provides 800 brands and 33,000 products of different types of Lipstics, Skin & Hair care Products etc. Nykaa fullfill many wishes."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css "
              link="https://lucent-mooncake-4d4201.netlify.app/"
              a="https://github.com/VivekGhalout/Construct-Week-Project-"
            />
          </Col>
        <Col md={6} className="project-card" >
            <ProjectCards
              imgPath={p1}
              title="Retax CRM "
              description="This is CRM software to streamline processes, enhance user experience, and maximize sales opportunities"
              tech="Tech-Stacks"
              techD="Html | Javascript | Css | React | ChakraUI "
              link="https://retaxclone.netlify.app/"
              a="https://github.com/akashp369/RetaxClone"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={p2}
              title="QuikrBazaar Clone"
              description="QuikrBazaar is a popular online platform for buying and selling a wide range of products and services."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css "
              link="https://comforting-frangipane-b36553.netlify.app/home"
              a="https://github.com/khushi627jain/Quikr-Bazar"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={p4}
              title="Sun-Down Studio"
              description="Sundown is a multi-disciplinary studio focused on creating unique, end-to-end experiences and environments. "
              tech="Tech-Stacks"
              techD="Html | CSS | JavaScript  "
              link="https://667fc03c50c3bcfb82872538--nimble-dango-cbcc22.netlify.app/"
              a="https://github.com/ShaileshPanghate/SunDownWeb"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={p5}
              title="To-Do App"
              description="Streamline your tasks with our intuitive to-do app, offering seamless organization and efficient task management for enhanced productivity. "
              tech="Tech-Stacks"
              techD="Html | React JS | Tailwind CSS | CSS  "
              link="https://todo-app-react-nine-chi.vercel.app/"
              a="https://github.com/ShaileshPanghate/TodoAppReact"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}
export default Projects;