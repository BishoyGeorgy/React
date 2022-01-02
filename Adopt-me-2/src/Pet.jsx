import { Link } from "react-router-dom";

const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;

  let hero = "https://pets-images.dev-apis.com/pets/none.jpg";
  images.forEach((image, index) => {
    images[index] = image.replace("http://", "https://");
    // console.log(image);
  });

  // images.forEach(item => console.log(item));

  if (images.length) {
    hero = images[0];
  }
  // console.log(hero);

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
