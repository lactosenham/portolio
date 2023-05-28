import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Nom Nom Recipe Sharing",
      description: "Design & Development",
      imgUrl: projImg1,
      linkUrl: "https://nomnomrecipe.netlify.app/",
      GH: "https://github.com/Linh-0v0/Nom-Nom-Recipe-Sharing"
  
    },
    {
      title: "The New Mats",
      description: "Design & Development",
      imgUrl: projImg2,
      linkUrl: "https://thenewmats.netlify.app/",
      GH:"https://github.com/Linh-0v0/the-new-mats"
    },
    {
      title: "Poios App",
      description: "Design & Development",
      imgUrl: projImg3,
      linkUrl: "https://poios.netlify.app/",
      GH: "https://github.com/kuri-team/poios-app"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">School Project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Personal Project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">On working</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p>Greetings! In this portfolio, I am thrilled to present my school project, which demonstrates my adeptness in working with renowned frameworks like ReactJS, NodeJS, and the MERN (MongoDB, Express, React, Node.js) stack.</p>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>In this tab I want to present my personal coding projects. These projects have been instrumental in enhancing my coding skills and expanding my knowledge beyond the scope of my school projects. </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>I am excited to introduce my ongoing projects that focus on cutting-edge technologies and innovative domains. Currently, I am actively engaged in projects centered around Web3 development, Blockchain technology, and Blender. These endeavors allow me to stay at the forefront of emerging trends and broaden my skillset. </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
