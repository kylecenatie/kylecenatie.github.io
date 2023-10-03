import React from "react";
import "./card.css";
import { GiHearts} from "@react-icons/all-files/gi/GiHearts";
import { GiClubs } from "@react-icons/all-files/gi/GiClubs";
import { GiSpades} from "@react-icons/all-files/gi/GiSpades";
import {  GiDiamonds } from "@react-icons/all-files/gi/GiDiamonds";
const Card = (props) => {
    let cardColor;
    if(props.suit === "hearts" || props.suit === "diamonds"){
        cardColor = "red";
    }else{
        cardColor = "black";
    }
      return (
        // <div style={{ border: '1px solid black', borderRadius: '30px', padding: '20px', color: `${cardColor}`}}>
        <div className='card' style={{ color: `${cardColor}`}}>
       <div style={{ fontSize: '20px', marginBottom: '5px', textAlign: 'center', }}>{props.value}</div>
       <div  style={{ fontSize: '20px', textAlign: 'center' }}>
       {props.type === "heart" ? 
                <GiHearts />:
                props.type === "diamond" ? 
                <GiDiamonds />:
                props.type === "spade" ? 
                <GiSpades />:
                <GiClubs />}
       </div>
     </div>

      )
}
export default Card;

// import React from 'react';

// function Card(props) {
//   const { suit, value } = props;

//   return (
//     <div style={{ border: '1px solid black', borderRadius: '5px', padding: '10px', textAlign: 'center' }}>
//       <div style={{ fontSize: '20px', marginBottom: '5px' }}>{value}</div>
//       <div className={suit} style={{ fontSize: '30px' }}></div>
//       <div style={{ fontSize: '20px', marginTop: '5px' }}>{value}</div>
//     </div>
//   );
// }

// export default Card;
