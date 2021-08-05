import "./App.css";
import axios from "axios";
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import statecodes from "./statecodes.js";
import TextField from '@material-ui/core/styles';

const styles = {
  input: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      stateinput: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(event) {
    alert("You are in " + this.state.city + ", " + this.state.stateinput);
    const statecodeObject = statecodes.find(
      (o) => o.State === this.state.stateinput
    );
    console.log(statecodeObject.Code);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${statecodeObject.Code}&units=imperial&appid=02d2c0bc0569091f6d80053853dfabd6`
      )
      .then((response) => {
        if (response.data.weather[0].description === "heavy rain") {
          window.alert("Too rainy!");
        } else if (response.data.main.temp < 60) {
          window.alert("Too cold!");
        } else if (response.data.wind.speed > 10) {
          window.alert("Too windy!");
        } else {
          window.alert(
            `It's ${response.data.main.temp} degrees with average winds of ${response.data.wind.speed}mph. Hittable!`
          );
        }
        console.log(response.data);
      })
      .catch((error) => {
        window.alert("server not connected?");
        console.log(error);
      });

    event.preventDefault();
  }
  componentDidUpdate() {
    console.log(this.state.city + ", " + this.state.stateinput);
  }

  render() {
    const { classes } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Hello </h1>
        <p>Enter your city:</p>
        <input
          className={classes.input}
          type="text"
          name="city"
          value={this.state.city}
          onChange={this.handleChange}
        />
        <p>Enter your state:</p>
        <input
          type="text"
          name="stateinput"
          value={this.state.stateinput}
          onChange={this.handleChange}
        />
        <input type="submit" value="Can I hit?" />
      </form>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
