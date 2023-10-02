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
    //   {
    //      url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcSprPgYofGmXXPfuEDcZ_XI294n0bME5dTX9TGvINmPiA&s",
    //   },
    //   {
    //      url: "https://i.pinimg.com/474x/81/ca/47/81ca47eaae35615ba9a9bb57560aaa3c.jpg",
    //   },
    //   {
    //      url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcTof2fniv0mZzN8DByLmb6ILU4MvV_SGr_wptMeAut_dPaYMBkeHnHhD5egzU7MB0GSqE&usqp=CAU",
    //   },
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
// const ImageSlider = () => {
//   const sliderRef = useRef(null);
//   const scrollAmount = 100;
//   const images = [
//     {
//       id: 1,
//       url: "https://source.unsplash.com/300x300/?perth,australia"
//     },
//     {
//       id: 2,
//       url: "https://source.unsplash.com/300x300/?west-australia"
//     },
//     {
//       id: 3,
//       url: "https://source.unsplash.com/300x300/?perth"
//     },
//     {
//       id: 4,
//       url: "https://source.unsplash.com/300x300/?quokka,perth"
//     },
//     {
//       id: 5,
//       url: "https://source.unsplash.com/300x300/?margaretriver,australia"
//     },
//     {
//       id: 6,
//       url:
//         "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
//     }
//   ];

//   return (
//     <div className="App">
//       <button
//         className="nav-btn"
//         onClick={() => {
//           const container = sliderRef.current;
//           container.scrollLeft -= scrollAmount;
//         }}
//       >
//         <PiArrowSquareLeftFill />
//       </button>
//       <div className="images-container" ref={sliderRef}>
//         {images.map((image) => {
//           return (
//             <img
//               className="image"
//               alt="sliderImage"
//               key={image?.id}
//               src={image?.url}
//             />
//           );
//         })}
//       </div>
//       <button
//         className="nav-btn"
//         onClick={() => {
//           const container = sliderRef.current;
//           container.scrollLeft += scrollAmount;
//         }}
//       >
//         <PiArrowSquareRightFill />
//       </button>
//     </div>
//   );
// }

export default ImageSlider;