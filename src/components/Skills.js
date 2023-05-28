import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>In this section, I would like to highlight my current skill set and outline my aspirations for future growth. While I possess a range of skills in web development, blockchain, and 3D modeling, I am continuously working to enhance my proficiency in these areas. Additionally, I have plans to expand my knowledge into the fields of data science and robotics. Let's explore my current skills and future aspirations in more detail.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <h1 className="skill-percentage">80%</h1>
                                <h5>Front-end Development</h5>
                            </div>
                            <div className="item">
                                <h1 className="skill-percentage" >90%</h1>
                                <h5>UX/UI Design</h5>
                            </div>
                            <div className="item">
                                <h1 className="skill-percentage" >70%</h1>
                                <h5>Back-end development</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
