import React from "react";
import Row from "./_base/Row";
import { getRandomAnimalFact } from "../utils/api";
import PropTypes from "prop-types";

/**
 * @todo
 * Selesaikan komponen AnimalFactCard hingga:
 *   1. Menampilkan fakta tentang hewan dari RESTful API
 *      menggunakan fungsi getRandomAnimalFact
 *      berdasarkan props animal.
 *
 *  2. Mengubah UI yang menampikan fact menjadi input dan
 *     menyinkronisasi document.title dengan nilai state fact.
 */

function AnimalFactCard({ animal }) {
  const [image, setImage] = React.useState(null);
  const [fact, setFact] = React.useState(null);

  React.useEffect(() => {
    const fetchAnimalData = async () => {
      const { fact, image } = await getRandomAnimalFact(animal);
      setFact(fact);
      setImage(image);
    };

    fetchAnimalData();

    // cleanup function to set null indication loading
    return () => {
      setFact(null);
      setImage(null);
    };
  }, [animal]);

  const factChangeHandler = (e) => {
    setFact(e.target.value);
  };

  // menyesuaikan document.title dengan perubahan nilai state fact.
  React.useEffect(() => {
    if (fact !== null) {
      document.title = fact;
    }
  }, [fact]);

  return (
    <section>
      <Row label="Image">
        {image === null ? (
          <img src="https://via.placeholder.com/600x400" alt="placeholder" />
        ) : (
          <img src={image} alt={fact} />
        )}
      </Row>
      <Row label="Fact">
        {fact === null ? (
          <p>Loading fact ...</p>
        ) : (
          <textarea value={fact} onChange={factChangeHandler}></textarea>
        )}
      </Row>
    </section>
  );
}

AnimalFactCard.propTypes = {
  animal: PropTypes.string.isRequired,
};

export default AnimalFactCard;
