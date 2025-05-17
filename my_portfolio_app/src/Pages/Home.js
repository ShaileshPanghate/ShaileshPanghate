import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../Assets/my-avatar.jpg";
import SelfIntro from "../Components/SelfIntro/SelfIntro";
import TypeWriter from "../Components/TypeWriter/TypeWriter";

function Home() {
  return (
    <section id="home"> 
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={5} className="home-profile" style={{ paddingBottom: 20 , marginLeft:"20px", marginRight:"-20px" }}>
              <img src={myImg} alt="home pic" className="img-fluid" style={{borderRadius:"60px", height: "auto",}}/>
            </Col>
            <Col md={7} className="home-header">
              <h1  className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name ">
                I'M
                <strong className="main-name br"> Shailesh Panghate</strong>
              </h1>

              <div style={{  textAlign: "left" }}>
                <TypeWriter />
              </div>
            </Col>

            
            
          </Row>
        </Container>    
      </Container>
      <SelfIntro/>
      
    </section>
  );
}

export default Home;