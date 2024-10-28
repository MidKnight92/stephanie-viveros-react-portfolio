import { Fragment } from "react";

const srcPaths = [
  "MZFUJL42RWo?si=1c4MR37_2yo_embn",
  "MZFUJL42RWo?si=1c4MR37_2yo_embn",
  "TtKHPUt4Yxs?si=jr8Gpfj4iQ_VN7Po",
  "qJHvN7Vcmso?si=upxwYl8QY2Xw9Fkm",
  "qJHvN7Vcmso?si=upxwYl8QY2Xw9Fkm",
  "DJ84-YiamUc?si=W1tUbMjOzIXi63X3",
];

const Videos = () => {
  return srcPaths.map((path, i) => (
    <Fragment key={`path-${i}`}>
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
    </Fragment>
  ));
};

export default Videos;
