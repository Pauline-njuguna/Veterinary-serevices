import React from "react";
import "./index.css";

function Services() {
  return (
    <div id="services">
      <h1>Our Services</h1>
      <div className="services-container">
        <div>
          <img src="src/components/image/prev.jpg" alt="Preventive Care" />
          <h2>Preventive Care</h2>
          <p>
            We offer preventive care services to keep your pets healthy and
            prevent illness. This includes routine check-ups, vaccinations,
            parasite prevention, and more.
          </p>
        </div>
        <div>
          <img src="src/components/image/dental.jpg" alt="Dental Care" />
          <h2>Dental Care</h2>
          <p>
            We provide dental care services to help maintain your pet's oral
            health. This includes dental exams, cleanings, extractions, and
            more.
          </p>
        </div>
        <div>
          <img src="src/components/image/s.p.jpg" alt="Surgery" />
          <h2>Surgery</h2>
          <p>
            We offer a range of surgical services for pets, including spaying
            and neutering, soft tissue surgery, and orthopedic surgery.
          </p>
        </div>
        <div>
          <img src="src/components/image/emerg.jpg" alt="Emergency Services" />
          <h2>Emergency Services</h2>
          <p>
            We provide emergency veterinary services for pets who require urgent
            medical attention. Our team is available 24/7 to provide immediate
            care and support for your pets.
          </p>
        </div>
        <div>
          <img src="src/components/image/cat - grooming.jpg" alt="Grooming" />
          <h2>Grooming</h2>
          <p>
            We offer grooming services to help keep your pets looking and
            feeling their best. This includes bathing, haircuts, nail trimming,
            and more.
          </p>
        </div>
        <div>
          <img src="src/components/image/boarding.jpg" alt="Boarding" />
          <h2>Boarding</h2>
          <p>
            We provide boarding services for pets when you're away. Our facility
            is designed to ensure your pet's safety, comfort, and well-being.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
