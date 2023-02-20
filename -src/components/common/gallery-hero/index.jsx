import React from "react";
import img1 from "../../../assets/images/cofe-sample.png";
import img2 from "../../../assets/images/cofe-sample2.png";
import img3 from "../../../assets/images/cofe-sample3.png";
import img4 from "../../../assets/images/cofe-sample4.png";

import ImageGallery from "react-image-gallery";

const GalleryHero = () => {
  const images = [
    {
      original: img1,
      thumbnail: img1,
      fullScreen: false,
    },
    {
      original: img2,
      thumbnail: img2,
    },
    {
      original: img3,
      thumbnail: img3,
    },
    {
      original: img4,
      thumbnail: img4,
    },
  ];

  return (
    <>
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        showPlayButton={false}
        showNav={false}
        isRTL={true}
      />
    </>
  );
};

export default GalleryHero;
