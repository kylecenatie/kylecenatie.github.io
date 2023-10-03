import React from "react";
import { Link } from "react-router-dom"
import { SiPremierleague, SiMlb, SiNba } from "react-icons/si"
import { GiAmericanFootballHelmet } from "@react-icons/all-files/gi/GiAmericanFootballHelmet";
import { GiHockey } from "@react-icons/all-files/gi/GiHockey";
import './sportshome.css'


const SportsHome = () => {
    return (
        <div className="sportsHome">
            <h2 className="text-align center">Select the league to view standings</h2>
            <div >
                <Link to={`/pl`}><span className="tite" ><SiPremierleague size={200} style={{ 'border': 'solid black 2px', padding: "20px", margin: "auto", cursor: "pointer" }} /> </span></Link>
                <Link to={`/mlb`}><span className="tile" ><SiMlb size={200} style={{ 'border': 'solid black 2px', padding: "20px", margin: "auto", cursor: "pointer" }} /> </span> </Link>
                <Link to={`/nba`}><span className="tile" ><SiNba size={200} style={{ 'border': 'solid black 2px', padding: "20px", margin: "auto", cursor: "pointer" }} /> </span> </Link>
                {/* <Link to={`/nfl`}> <span className="tile" ><GiAmericanFootballHelmet size={200} style={{'border': 'solid black 2px', padding: "20px", margin: "auto", cursor: "pointer"}}/> </span> </Link> */}
                <Link to={`/nhl`}><span className="tile" ><GiHockey size={200} style={{ 'border': 'solid black 2px', padding: "20px", margin: "auto", cursor: "pointer" }} /> </span> </Link>
            </div><div>Found this cool api to get up to date standings for the english premier league, mlb, nba, and nhl. </div><div>Click the league you would like to see the standings for.</div></div>
    );
    //}
}

export default SportsHome;