import React, { Component } from "react";
import Cardlist from "./components/CardList/card-list.component";
import Searchbox from "./components/SearchBox/search-box.component";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => this.setState({ monsters: data }));
  }

  render() {
    let { monsters, searchfield } = this.state;
    let filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return (
      <div className="App">
        <Searchbox
          placeholder="enter name of monster"
          handleChange={(e) => this.setState({ searchfield: e.target.value })}
        ></Searchbox>
        <Cardlist monsters={filteredMonsters}></Cardlist>
      </div>
    );
  }
}

export default App;
