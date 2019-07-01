import React from "react";

//COMPONENTS
import NewsSlider from "../widgets/NewsSlider/slider";
import NewsList from "../widgets/NewsList/newsList";

export default function videos() {
  return (
    <div>
      <NewsSlider
        type="featured"
        start={8}
        amount={11}
        settings={{
          dots: false
        }}
      />
      <NewsList type="imgCard" loadmore={true} start={3} amount={8} />
    </div>
  );
}
