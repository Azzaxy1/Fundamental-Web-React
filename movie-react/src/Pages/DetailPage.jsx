import React from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import MovieDetail from "../Components/MovieDetail";
import { getMovie } from "../utils/data";

const DetailPageWrapper = () => {
  const { id } = useParams();

  return <DetailPage id={Number(id)} />;
};

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: getMovie(props.id),
    };
  }

  render() {
    if (this.state.movie === null) {
      return <p>Movie is not found!</p>;
    }

    return (
      <section>
        <MovieDetail {...this.state.movie} />
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.number.isRequired,
};

export default DetailPageWrapper;
