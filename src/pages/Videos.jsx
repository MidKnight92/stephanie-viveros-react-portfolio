import { srcPaths } from "../constants";

const Videos = () => {
  return srcPaths.map((path, i) => (
    <div key={`path-${i}`}>
      <iframe
        className="mx-auto m-3"
        src={`https://www.youtube.com/embed/${path}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  ));
};

export default Videos;
