import React from "react";
import About from "./About";
import Services from "./Service";
// import image from  "./image"

function Home() {
  return (
    <>
      <div className="home">
        <div className="image-section">
          <img
            src="src/components/image/alvan-nee-ZCHj_2lJP00-unsplash.jpg"
            alt="Pet"
          />
        </div>
        <div className="text-section">
          <h1>Welcome to Our Veterinary Service App</h1>
          <p>
            We offer a wide range of veterinary services to help your furry
            friends stay healthy and happy. <br></br>
            Our team of experienced vets and staff are here to provide the best
            care possible for your pets.
          </p>

          {/* <h2>Our Services</h2>
      <ul>
        <li>Preventive Care</li>
        <li>Dental Care</li>
        <li>Surgery</li>
        <li>Emergency Services</li>
      </ul> */}
        </div>
      </div>
      <About />
      <Services />
    </>
  );
}

export default Home;