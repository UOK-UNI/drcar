"use client";

import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

const ImageSlider = () => {
  const list = [
    {
      before:
        "https://2image.s3.ir-thr-at1.arvanstorage.ir/before-after%2Fbefore-1.jpeg?versionId=",
      after:
        "https://2image.s3.ir-thr-at1.arvanstorage.ir/before-after%2Fafter-1.jpeg?versionId=",
    },
    {
      before:
        "https://2image.s3.ir-thr-at1.arvanstorage.ir/before-after%2Fbefore-2.jpeg?versionId=",

      after:
        "https://2image.s3.ir-thr-at1.arvanstorage.ir/before-after%2Fafter-2.jpeg?versionId=",
    },
    {
      before:
        "https://2image.s3.ir-thr-at1.arvanstorage.ir/before-after%2Fbefore-3.jpeg?versionId=",

      after:
        "https://2image.s3.ir-thr-at1.arvanstorage.ir/before-after%2Fafter-3.jpeg?versionId=",
    },
    {
      before:
        "https://2image.s3.ir-thr-at1.arvanstorage.ir/before-after%2Fbefore-4.jpeg?versionId=",

      after:
        "https://2image.s3.ir-thr-at1.arvanstorage.ir/before-after%2Fafter-4.jpeg?versionId=",
    },
  ];
  return (
    <div className="container my-10 md:my-16">
      <h3 className="text-3xl text-center text-primary-1">نمونه کارهای ما </h3>
      <div className="flex flex-col md:grid grid-cols-12 gap-8 dir-ltr [&>img]:!h-30 mx-12 lg:mx-64 mt-16 justify-items-center">
        {list.map((item, index) => (
          <div
            className=" md:col-span-6 overflow-hidden h-52 md:h-56 lg:h-80"
            key={index}
          >
            <ReactBeforeSliderComponent
              firstImage={{
                imageUrl: item.before,
              }}
              secondImage={{
                imageUrl: item.after,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
