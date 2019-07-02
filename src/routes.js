import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

////SESSIONS
import Home from "./components/Home/home";
import News from "./components/News/news";
import Videos from "./components/Videos/videos";

///HOC SESSIONS
import Layout from "./hoc/Layout/layout";

//// inner SESSIONS
import NewsArticles from "./components/Articles/News/Post/index";
import VideoArticles from "./components/Articles/Videos/Video/index";

export default class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/news" extact component={News} />
          <Route path="/videos" exact component={Videos} />
          <Route path="/articles/:id" exact component={NewsArticles} />
          <Route path="/videos/:id" exact component={VideoArticles} />
        </Switch>
      </Layout>
    );
  }
}
