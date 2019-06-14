import React, { Component } from "react";
import styles from "./videosList.css";
import axios from "axios";
import { URL } from "../../../config/config";
import Button from "../Buttons/buttons";
import VideosTemplate from "./videosTemplate";
export default class videosList extends Component {
  state = {
    teams: [],
    videos: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  };
  renderTitle = () => {
    return this.props.title ? (
      <h3>
        <strong>NBA</strong>
        Videos
      </h3>
    ) : null;
  };

  componentWillMount() {
    this.request(this.state.start, this.state.end);
  }

  request = (start, end) => {
    if (this.state.teams.length < 1) {
      axios.get(`${URL}/teams`).then(response => {
        this.setState({
          teams: response.data
        });
      });
    }
    axios.get(`${URL}/videos?_start=${start}&_end=${end}`).then(response => {
      this.setState({
        videos: [...this.state.videos, ...response.data],
        start,
        end
      });
    });
  };

  renderVideos = () => {
    let template = null;

    switch (this.props.type) {
      case "card":
        template = (
          <VideosTemplate data={this.state.videos} teams={this.state.teams} />
        );
        break;
      default:
        template = null;
    }
    return template;
  };

  loadMore = () => {
    let end = this.state.end + this.state.amount;
    this.request(this.state.end, end);
  };
  renderButton = () => {
    return this.props.loadmore ? (
      <Button
        type="loadmore"
        loadMore={() => this.loadMore()}
        cta="Load More Videos"
      />
    ) : (
      <Button type="linkTo" cta="More Videos" linkTo="/videos" />
    );
  };
  render() {
    console.log(this.state.videos);
    return (
      <div className={styles.videoList_Wrapper}>
        {this.renderTitle()}
        {this.renderVideos()}
        {this.renderButton()}
      </div>
    );
  }
}
