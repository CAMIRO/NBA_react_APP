import React, { Component } from "react";
/// firebase
import { firebaseArticles } from '../../../firebase';


///// COMPONENTS
import SliderTemplates from "./slider_templates";

export default class NewsSlider extends Component {
  state = {
    news: []
  };

  componentDidMount() {
    firebaseArticles.limitToFirst(3).once('value')
    .then((snapshot)=>{
      const news = [];
      snapshot.forEach((childSnapshot)=>{
        news.push({
          ...childSnapshot.val(),
          id:childSnapshot.key
        });
        this.setState({
          news
        })
      })
    })
   /*  axios
      .get(
        `${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`
      )
      .then(response => {
        //console.log(response.data);
        this.setState({
          news: response.data
        });
      }); */
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
