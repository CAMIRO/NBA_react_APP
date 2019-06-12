import React, { Component } from "react";
import styles from "./videosList.css";
import axios from "axios";
import { URL } from "../../../config/config";
import Button from "../Buttons/buttons";
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

  loadMore = () => {
    return;
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
    return (
      <div className={styles.videoList_Wrapper}>
        {this.renderTitle()}
        {this.renderButton()}
      </div>
    );
  }
}
