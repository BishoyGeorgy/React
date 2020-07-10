import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, Breedropdown, setBreed] = useDropdown("Breed", "", breeds);

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds }) => {
      const breeString = breeds.map(({ name }) => name);
      setBreeds(breeString);
    }, console.error);
  }, [animal, setBreed]);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <h1>{location}</h1>
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <Breedropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
