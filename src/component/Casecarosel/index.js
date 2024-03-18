import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import images from "../../utilities/images";

const Casecarousel = forwardRef(({ data }, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(6);

  const handleNext = () => {
    if (currentIndex + visibleImages <data.length) {
      setCurrentIndex(currentIndex +1)
    }
    else{
      setCurrentIndex(0);
    }

  };  

  const handlePrev = () => {
    if(currentIndex > 0) {
      setCurrentIndex(currentIndex -1);
    }
    else{
      setCurrentIndex(data.length - visibleImages)
    }
  };

  useImperativeHandle(ref, () => ({
    handleNext,
    handlePrev,
  }));

  return (
    <div>
      <div className="flex gap-2 p-3 relativew-full ">
        {data.slice(currentIndex, currentIndex + visibleImages).map((item, index) => (
          <div key={index}>
            <div className="rounded-lg bg-placeholderlighterblue w-32 h-32 flex items-center justify-center">
              <img src={item.images} className="h-20" alt={`Image ${index}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Casecarousel;
