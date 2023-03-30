import React, { useState } from "react";
import "./index.css";

const PetForm = () => {
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3000/pets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          breed,
          age,
          name,
          species,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add pet");
      }

      setBreed("");
      setAge("");
      setName("");
      setSpecies("");
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
        Name:
        <input
          className="pet-form-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
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
        Species:
        <input
          className="pet-form-input"
          type="text"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
        />
      </label>
      {/* <label className="pet-form-label">
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
