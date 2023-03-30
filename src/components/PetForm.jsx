import React, { useState } from "react";
import "./index.css";

const PetForm = () => {
  const [Name, setName] = useState("");

  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [species, setSpecies] = useState("");
  // const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/pets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          breed,
          age,
          gender,
          // color,
          // category,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add pet");
      }

      setBreed("");
      setAge("");
      setGender("");
      // setColor("");
      // setCategory("");
      setIsLoading(false);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Failed to add pet");
      setIsLoading(false);
    }
  };

  return (
    <form className="pet-form" onSubmit={handleSubmit}>
      <label className="pet-form-label">
        Breed:
        <input
          className="pet-form-input"
          type="text"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />
      </label>
      <label className="pet-form-label">
        Age:
        <input
          className="pet-form-input"
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <label className="pet-form-label">
        Gender:
        <input
          className="pet-form-input"
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
      </label>
      {/* <label className="pet-form-label">
        Color:
        <input
          className="pet-form-input"
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </label>
      <label className="pet-form-label">
        Category:
        <input
          className="pet-form-input"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label> */}
      {isLoading ? (
        <p className="pet-form-loading">Loading...</p>
      ) : (
        <button className="pet-form-button" type="submit">
          Submit
        </button>
      )}
      {errorMessage && <p className="pet-form-error">{errorMessage}</p>}
    </form>
  );
};

export default PetForm;
