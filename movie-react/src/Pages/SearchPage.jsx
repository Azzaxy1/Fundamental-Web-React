import React from "react";
import { searchMovies } from "../utils/data";
import { useSearchParams } from "react-router-dom";
import MovieList from "../Components/MovieList";
import SearchBar from "../Components/SearchBar";

const SearchPageWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Mengambil nilai/query dari URL
  const title = searchParams.get("title");

  // Mengubah seacrh param di URL
  const changeSearchParams = (keyword) => {
    setSearchParams({ title: keyword });
  };

  return <SearchPage onSearch={changeSearchParams} activeKeyword={title} />;
};

class SearchPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // inital state agar sesuai dengan URL
      foundMovies: props.activeKeyword ? searchMovies(props.activeKeyword) : [],
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(keyword) {
    this.setState(() => {
      return {
        foundMovies: searchMovies(keyword),
      };
    });

    // dari comp wrapper agar search params ikut berubah
    this.props.onSearch(keyword);
  }

  render() {
    return (
      <section>
        <h2>Search Movie</h2>
        <SearchBar
          search={this.onSearch}
          defaultKeyword={this.props.activeKeyword}
        />
        <MovieList movies={this.state.foundMovies} />
      </section>
    );
  }
}

export default SearchPageWrapper;
