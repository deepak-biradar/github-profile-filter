import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';


class App extends Component {

  constructor() {
    super();
    this.state = {
        preload: false,
        list : []
    }
    this.handleSearch = this.handleSearch.bind(this);
  }


  async handleSearch() {
    this.setState(() => ({preload: true}));

    const url = "https://api.github.com/search/users?q=" + this.state.searchString;
    fetch(url).then((response) => {
        response.json().then((res) => {
                console.log(res);
                this.setState({list: res.items})
            }
        );
    }).catch((error) => {
        this.setState(() => ({preload: false}));
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="app-wrapper">
          <HeaderComponent handleSearch={this.handleSearch}/>
          <FooterComponent list={this.state.list} />
        </div>
      </div>
    );
  }
}

export default App;
