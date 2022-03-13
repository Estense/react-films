import React from "react";
import { Album } from "../components/Album";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  state = {
    films: [],
    loading: true,
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=Matrix`)
      .then((response) => response.json())
      .then((data) => this.setState({ films: data.Search, loading: false }))
      .catch();
  }

  searchMovie = (movieTitle, type) => {
    this.setState({ loading: true });
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${movieTitle}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ films: data.Search, loading: false }));
  };

  render() {
    const { films, loading } = this.state;
    return (
      <div className="content container py-5">
        <Search searchMovie={this.searchMovie} />
        {loading ? <Preloader /> : <Album films={films} />}
      </div>
    );
  }
}

export { Main };
