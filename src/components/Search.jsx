import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };

  keyHandle = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovie(this.state.search, this.state.type);
    }
  };

  handleCheckboxChange = (event) => {
    this.setState(
      () => ({
        type: event.target.value,
      }),
      () => {
        if (this.state.search) {
          this.props.searchMovie(this.state.search, this.state.type);
        }
      }
    );
  };

  render() {
    return (
      <div className="py-3">
        <div className="input-group mb-3">
          <input
            type="search"
            className="form-control"
            aria-describedby="button-addon2"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.keyHandle}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={() => {this.props.searchMovie(this.state.search, this.state.type);}}
          >
            Search
          </button>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            onChange={this.handleCheckboxChange}
            value="all"
            checked={this.state.type === "all"}
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            All
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            onChange={this.handleCheckboxChange}
            value="movie"
            checked={this.state.type === "movie"}
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
            Movies
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            onChange={this.handleCheckboxChange}
            value="series"
            checked={this.state.type === "series"}
          />
          <label className="form-check-label" htmlFor="inlineRadio3">
            Series
          </label>
        </div>
      </div>
    );
  }
}
export { Search };
