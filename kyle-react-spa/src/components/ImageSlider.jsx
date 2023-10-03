// import React, { useRef } from "react";
// import "./styles.css";
// import {PiArrowSquareLeftFill} from 'react-icons'
// import {PiArrowSquareRightFill} from 'react-icons'
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import im1 from "../images/e01.jpg";
import im2 from "../images/asugrad.jpeg";
const ImageSlider = () => {
   const [imageNum, setImageNum] = useState(1);
   const sliderImages = [
      {
         url: im1,
      },
      {
         url: im2,
      }
   ];
   return (
      <span>
         <SimpleImageSlider
            width={600}
            height={550}
            images={sliderImages}
            showBullets={true}
            showNavs={true}
            autoPlay={true} 
            onStartSlide = {(index, length) => {
               setImageNum(index);
            }}
               autoPlayDelay = {3}
         />
         {/* <div style = {{ fontSize: "1.5rem" }}>
            The current image slide No is {imageNum}.
         </div> */}
      </span>
   );
}

export default ImageSlider;