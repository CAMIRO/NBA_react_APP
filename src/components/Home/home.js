import React from "react";

//COMPONENTS
import NewsSlider from "../widgets/NewsSlider/slider";
import NewsList from "../widgets/NewsList/newsList";
import VideosList from "../widgets/VideosList/videosList";

export default function home() {
  return (
    <div>
      <NewsSlider
        type="featured"
        start={6}
        amount={9}
        settings={{
          dots: false
        }}
      />
      <NewsList type="card" loadmore={true} start={3} amount={3} />
      <VideosList
        type="card"
        title={true}
        loadmore={true}
        start={0}
        amount={3}
      />
    </div>
  );
}
