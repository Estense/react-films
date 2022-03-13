import React from "react";
import { Album } from '../components/Album';
import { Preloader } from '../components/Preloader'

class Main extends React.Component {
  state = {
    films: [],
  };

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=2036e4a5&s=Matrix')
      .then(response => response.json())
      .then(data => this.setState({films: data.Search}))
  }

  render() {
    const { films } = this.state;
    return (
      <div className="content container py-5">
        {
          films.length 
          ? 
          <Album films={films}/>
          : 
          <Preloader />
        }
        
      </div>
    )
  }
}

export { Main }