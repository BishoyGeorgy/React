import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';

const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    const [breed, Breedropdown] = useDropdown("Breed", "", breeds);

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <h1>{location}</h1>
                    <input id="location"
                        value={location}
                        placeholder="Location"
                        onChange={e => setLocation(e.target.value)} />
                </label>
                <AnimalDropdown />
                <Breedropdown />
                <button>Submit</button>
            </form>

        </div>
    )
}

export default SearchParams;