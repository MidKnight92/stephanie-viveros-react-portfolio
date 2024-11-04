import { srcPaths } from "../constants";

const Videos = () => {
  return srcPaths.map((path, i) => (
    <div key={`path-${i}`}>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${path}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  ));
};

export default Videos;
