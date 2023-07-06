import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";
import p1 from "../Assets/p1.PNG";
import p2 from "../Assets/p2.PNG";
import p3 from "../Assets/p3.PNG";


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

          {/* <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://github.com/Rushikesh7997/Sreenshots/blob/main/to-do%201.PNG?raw=true"
              title="To-Do-List"
              description="ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do. It is helpful in planning our daily schedules. It is created by JavaScript, Html, Css languages."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css "
              link="https://iridescent-granita-ec6794.netlify.app/"
              a="https://github.com/Rushikesh7997/To-Do-List-App"
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}
export default Projects;