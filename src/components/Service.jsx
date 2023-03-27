import React from "react";
// import preventiveCareImage from "../assets/preventive-care.jpg";
// import dentalCareImage from "../assets/dental-care.jpg";
// import surgeryImage from "../assets/surgery.jpg";
// import emergencyServicesImage from "../assets/emergency-services.jpg";

function Services() {
  return (
    <div>
      <h1>Our Services</h1>
      <div>
        {/* <img src={preventiveCareImage} alt="Preventive Care" /> */}
        <h2>Preventive Care</h2>
        <p>
          We offer preventive care services to keep your pets healthy and
          prevent illness. This includes routine check-ups, vaccinations,
          parasite prevention, and more.
        </p>
      </div>
      <div>
        {/* <img src={dentalCareImage} alt="Dental Care" /> */}
        <h2>Dental Care</h2>
        <p>
          We provide dental care services to help maintain your pet's oral
          health. This includes dental exams, cleanings, extractions, and more.
        </p>
      </div>
      <div>
        {/* <img src={surgeryImage} alt="Surgery" /> */}
        <h2>Surgery</h2>
        <p>
          We offer a range of surgical services for pets, including spaying and
          neutering, soft tissue surgery, and orthopedic surgery.
        </p>
      </div>
      <div>
        {/* <img src={emergencyServicesImage} alt="Emergency Services" /> */}
        <h2>Emergency Services</h2>
        <p>
          We provide emergency veterinary services for pets who require urgent
          medical attention. Our team is available 24/7 to provide immediate
          care and support for your pets.
        </p>
      </div>
    </div>
  );
}

export default Services;
