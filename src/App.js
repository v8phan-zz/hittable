import './App.css';
import axios from 'axios';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      statestate: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(event) {
    alert('You are in ' + this.state.city +', ' + this.state.statestate);
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=02d2c0bc0569091f6d80053853dfabd6`)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          window.alert("server not connected?")
          console.log(error)
        })

   // event.preventDefault();
  }
  componentDidUpdate() {
    console.log(this.state.city +', ' + this.state.statestate)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <h1>Hello </h1>
      <p>Enter your city:</p>
      <input
        type='text'
        name='city'
        value={this.state.city}
        onChange={this.handleChange}
      />
      <p>Enter your state:</p>
      <input
        type='text'
        name='statestate'
        value={this.state.statestate}
        onChange={this.handleChange}
      />
      <input type='submit' value="Can I hit?"/>

      </form>
    );

  }

}


export default App;
