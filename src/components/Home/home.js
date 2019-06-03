import React from "react";
import NewsSlider from "../widgets/NewsSlider/slider";

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
    </div>
  );
}
