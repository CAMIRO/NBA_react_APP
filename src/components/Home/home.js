import React from "react";

//COMPONENTS
import NewsSlider from "../widgets/NewsSlider/slider";
import NewsList from "../widgets/NewsList/newsList";

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
    </div>
  );
}
