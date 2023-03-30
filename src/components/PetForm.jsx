import React, { useState } from "react";
import "./index.css";

const PetForm = () => {
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("http:localhost:3000/pets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          breed,
          age,
          gender,
          color,
          category,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add pet");
      }

      setBreed("");
      setAge("");
      setGender("");
      setColor("");
      setCategory("");
      setIsLoading(false);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Failed to add pet");
      setIsLoading(false);
    }
  };

  return (
    <form className="pet-form" onSubmit={handleSubmit}>
      <label className="input-label">
        Breed:
        <input
          className="input-field"
          type="text"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />
      </label>
      <label className="input-label">
        Age:
        <input
          className="input-field"
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <label className="input-label">
        Gender:
        <input
          className="input-field"
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
      </label>
      <label className="input-label">
        Color:
        <input
          className="input-field"
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </label>
      <label className="input-label">
        Category:
        <input
          className="input-field"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <button className="submit-btn" type="submit">
          Submit
        </button>
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
};

export default PetForm;
