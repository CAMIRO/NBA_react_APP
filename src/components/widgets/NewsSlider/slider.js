import React, { Component } from "react";
import axios from "axios";
import { URL } from "../../../config/config";

///// COMPONENTS
import SliderTemplates from "./slider_templates";

export default class NewsSlider extends Component {
  state = {
    news: []
  };

  componentDidMount() {
    axios
      .get(
        `${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`
      )
      .then(response => {
        //console.log(response.data);
        this.setState({
          news: response.data
        });
      });
  }

  render() {
    //console.log(this.state.news);
    return (
      <div>
        <SliderTemplates
          data={this.state.news}
          type={this.props.type}
          settings={this.props.settings}
        />
      </div>
    );
  }
}
