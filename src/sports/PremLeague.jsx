import React from "react";
import { useEffect, useState } from "react";
import SportsHeader from "./SportsHeader";
import SportsStandings from "./SportsStandings";


const PremLeague = () => {

    const [standings, setStandings] = useState(false);
    const [logo, setLogo] = useState(false);


    const premLeagueHeaders = ["Rank", "Team", "Played", "Win", "Loss", "Draw", "GF", "GA", "GD", "Points"];
    useEffect(() => {
        if (standings) {
            return;
        } else {
            fetch("https://v3.football.api-sports.io/standings?league=39&season=2022", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "v3.football.api-sports.io",
                    "x-rapidapi-key": "d6d30cd8582a0c4eadffcaa3fa92d659"
                }
            })
                .then(response => {
                    return response.text();
                })
                .then((res) => {
                    //console.log(res);{
                    const jsonO = JSON.parse(res);
                    //console.log(jsonO.response[0].league.logo)
                    const arr = [];
                    const l = jsonO.response[0].league.logo
                    //Data = "Played", "Win", "Loss", "Draw", "GF", "GA", "GD", "Points"]
                    //console.log(JSON.stringify(jsonO.response[0][0]));
                    jsonO.response[0].league.standings[0].forEach(el => {
                        arr.push({ rank: el.rank, name: el.team.name, logo: el.team.logo, id: el.team.id, data: [el.all.played, el.all.win, el.all.lose, el.all.draw, el.all.goals.for, el.all.goals.against, el.goalsDiff, el.points] });

                    });
                    //console.log(jsonO.response[0].league.standings[0]);
                    setStandings(arr);
                    setLogo(l);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, [standings, logo]);
    if (logo) {
        return (
            <>
            <SportsHeader logo={logo} title='Premier League Standings' />
                <SportsStandings statHeaders={premLeagueHeaders} standings={standings} />
            </>)
    }
}
export default PremLeague;
