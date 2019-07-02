import React from "react";
import VideosList from "../widgets/VideosList/videosList";

export default function videos() {
  return (
    <div>
      <VideosList
        type="card"
        title={false}
        loadmore={true}
        start={0}
        amount={10}
      />
    </div>
  );
}
