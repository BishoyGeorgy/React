/* eslint-disable import/no-unresolved */
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

const Details = () => {
  const { id } = useParams();
  const [pet, setPet] = useState("");
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const { animal, breed, city, state, description, name, images } = pet;
  const [theme] = useContext(ThemeContext);

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);
    const json = await res.json();
    setPet(json.pets[0]);
    // setPet(json.numberOfResults > 0 ? json.pets[0] : new Object); // to handle empty responses from the API
    setLoading(false);
  }

  // function toggleModal() {
  //   setShowModal(!showModal);
  // }
  function adopt() {
    window.location = "https://bit.ly/pet-adopt";
  }

  console.log(showModal);
  return (
    <div className="details">
      {loading ? (
        <h2>loading … </h2>
      ) : (
        <div>
          <Carousel images={images} />
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
          <button onClick={() => setShowModal(!showModal)} style={{ backgroundColor: theme }}>Adopt {name}</button>
          <p>{description}</p>
          {
            showModal ? (
              <Modal>
                <div>
                  <h1>Would you like to adopt {name}?</h1>
                  <div className="buttons">
                    <button onClick={adopt}>Yes</button>
                    <button onClick={() => setShowModal(!showModal)}>No</button>
                  </div>
                </div>
              </Modal>
            ) : null
          }
        </div>
      )}
    </div>
  );
};

export default function DetailsErrorBoundary() {
  return (
    <ErrorBoundary>
      <Details />
    </ErrorBoundary>
  );
}
