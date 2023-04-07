import React from "react";
import "./card.css";
import { GiHearts} from "@react-icons/all-files/gi/GiHearts";
import { GiClubs } from "@react-icons/all-files/gi/GiClubs";
import { GiSpades} from "@react-icons/all-files/gi/GiSpades";
import {  GiDiamonds } from "@react-icons/all-files/gi/GiDiamonds";
const Card = (props) => {
      return (
            <div className="card" style={{color:props.singleCard.color}} >
                <h4>{props.singleCard.display}</h4>
                {props.singleCard.type === "heart" ? 
                <GiHearts />:
                props.singleCard.type === "diamond" ? 
                <GiDiamonds />:
                props.singleCard.type === "spade" ? 
                <GiSpades />:
                <GiClubs />}
            </div>
      )
}
export default Card;