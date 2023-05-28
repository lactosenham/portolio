import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, linkUrl, GH }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
      <a href={linkUrl}  target="_blank" rel="noopener noreferrer" className="project-link">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <p>{GH}</p>
          </div>
     </a>
      </div>
    </Col>
  );
};
