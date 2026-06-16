import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const images = Array.isArray(props.images) ? props.images : [props.images];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <Card className="project-card-view">
        <div className="px-2">
          <div className="image-slider">
            <img
              src={images[currentImage]}
              alt={`Project ${currentImage + 1}`}
              className="slider-image"
            />

            {images.length > 1 && (
              <div className="slider-dots">
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${
                      currentImage === index ? "active-dot" : ""
                    }`}
                    onClick={() => setCurrentImage(index)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        <Card.Body>
          <Card.Title>{props.title}</Card.Title>

          <Card.Text className="purple">{props.techLang}</Card.Text>

          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>

          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </Card.Body>
      </Card>

      <style>{`
        .image-slider {
          width: 100%;
          height: 320px;
          padding: 10px;
          box-sizing: border-box;
        }

        .slider-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 12px;
          transition: opacity 0.5s ease-in-out;
        }

        .slider-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 10px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #6c757d;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .active-dot {
          background-color: #c770f0;
          transform: scale(1.3);
        }   
      `}</style>
    </>
  );
}

export default ProjectCards;
