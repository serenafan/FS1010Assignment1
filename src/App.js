import image1 from "./images/city-skyline.jpg";
import image3 from "./images/cn-tower.jpg";
import image5 from "./images/rogers-center.jpg";
import image2 from "./images/old-city-hall.jpg";
import image4 from "./images/rom.jpg";
import image6 from "./images/new-city-hall.jpg";
import "./App.css";
import { useState } from "react";

function App() {
  const images = [
    {
      src: image1,
      alt: "city-skyline",
      text: "Torronto",
      description: "The Skyline",
    },
    {
      src: image2,
      alt: "old-city-hall",
      text: "Old City Hall",
      description: "The clock Tower",
    },
    {
      src: image3,
      alt: "cn-tower",
      text: "The CN Tower",
      description: "One of the Worlds Tallest Towers",
    },
    {
      src: image4,
      alt: "rom",
      text: "Royal Ontario Museum",
      description: "Most Vistited Museum in Canada",
    },
    {
      src: image5,
      alt: "rogers-center",
      text: "The Rogers Center",
      description: "Toronto's iconic Skydome",
    },
    {
      src: image6,
      alt: "new-city-hall",
      text: "Toronto City Hall",
      description: "A Brutalist Architecture Masterpiece",
    },
  ];
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <p className="header-p1">
          The City of <strong>Toronto</strong>
        </p>
        <p className="header-p2">
          Historical Sites & <strong>More</strong>
        </p>
      </header>
      <section className="grid">
        {images.map((image) => (
          <div className="image-base">
            <img src={image.src} alt={image.alt} />
            <div
              className="image-overlay"
              onClick={() => setSelectedImage(image)}
            >
              <p className="image-p1">{image.text}</p>
              <p className="image-p2">{image.description}</p>
            </div>
          </div>
        ))}
      </section>
      <footer>
        <ul class="social-icons">
          <li>
            <a href="https://www.facebook.com/cityofto/" class="social-icon">
              <i class="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/cityoftoronto" class="social-icon">
              <i class="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/user/thecityoftoronto" class="social-icon">
              <i class="fa fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/city-of-toronto/" class="social-icon">
              <i class="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/cityofto" class="social-icon">
              <i class="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
      </footer>
      {selectedImage && (
        <div
          className="modal"
          style={{ visibility: selectedImage ? "visible" : "hidden" }}
        >
          <a className="close" onClick={() => setSelectedImage(null)}>
            X
          </a>
          <div className="modal-body">
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
