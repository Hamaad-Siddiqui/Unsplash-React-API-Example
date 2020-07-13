// Basic Import's
import React, { Component } from "react";
// Other Import's
import SearchBar from "./components/SearchBar";
import unsplash from "../src/api/unsplash";
import ImageList from "./components/ImageList";
import "./App.css";

class App extends Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found : {this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
// Export
export default App;
