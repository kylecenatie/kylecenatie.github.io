import React from "react";
import { useEffect, useState } from "react";
import SportsHeader from "./SportsHeader";
import SportsStandings from "./SportsStandings";


const Nba = () => {

    const [westStandings, setWestStandings] = useState(false);
    const [eastStandings, setEastStandings] = useState(false);
    const [logo, setLogo] = useState(false);


    const nbaStatHeaders = ["Rank", "Team", "Played", "Win", "Win %", "Loss", "Loss %", "PF", "PA"];
    useEffect(() => {
        if (westStandings) {
            return;
        } else {
            fetch("https://v1.basketball.api-sports.io/standings?league=12&season=2022-2023", {
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
                    const west = [];
                    const east = [];
                    const l = jsonO.response[0][0].league.logo;
                    //console.log(jsonO.response[0])
                    //Data = "Played", " "Win", "Win %", "Loss", "Loss %", "PF", "PA"
                    jsonO.response[0].forEach(el => {

                        // console.log(el)
                        if (el.group.name === "Western Conference") {
                            west.push({
                                rank: el.position, name: el.team.name, logo: el.team.logo, id: el.team.id, data: [el.games.played, el.games.win.total, el.games.win.percentage, el.games.lose.total, el.games.lose.percentage,
                                el.points.for, el.points.against]
                            });
                        }
                        if (el.group.name === "Eastern Conference") {
                            east.push({
                                rank: el.position, name: el.team.name, logo: el.team.logo, id: el.team.id, data: [el.games.played, el.games.win.total, el.games.win.percentage, el.games.lose.total, el.games.lose.percentage,
                                el.points.for, el.points.against]
                            });

                        }


                    });
                    //console.log(jsonO.response[0].league.standings[0]);
                    setWestStandings(west);
                    setEastStandings(east);
                    setLogo(l);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, [eastStandings, westStandings, logo]);
    if (logo) {
        return (
            <>
                <SportsHeader logo={logo} title='NBA Standings' />
                <div></div>
                <h3 style={{ "textAlign": 'center' }}>Western Conference</h3>
                <SportsStandings statHeaders={nbaStatHeaders} standings={westStandings} />
                <h3 style={{ "textAlign": 'center' }}>Eastern Conference</h3>
                <SportsStandings statHeaders={nbaStatHeaders} standings={eastStandings} />
            </>)
    }
}
export default Nba;
