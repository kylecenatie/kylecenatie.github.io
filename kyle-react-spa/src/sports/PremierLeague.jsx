import React from "react";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table"



const PremierLeague = () => {
    const [standings, setStandings] = useState(false);
  useEffect(()=>{
    if(standings){
    return;
    }else{
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
        .then((res)=>{
            //console.log(res);
            const jsonO = JSON.parse(res);
            console.log(jsonO.response[0].league.standings[0]);
            setStandings(jsonO.response[0].league.standings[0]);
        }) 
        .catch(err => {
            console.log(err);
        });
    }
  }, []);

        return (
            <Table responsive>
              <thead>
                <tr>
                  <th>Rank</th>
                    <th>Team</th>
                    <th>Points</th>
                    <th>Goal Diff</th>
                    <th>Played</th>
                    <th>Total Wins</th>
                    <th>Total Losses</th>
                </tr>
              </thead>
              <tbody>
              {standings && standings.map(team => (
                      <tr key={team.rank}>
                         <td>{team.rank}</td>
                        <td style={{ height: '3.75rem' }}>
                            <img src={team.team.logo}
                            width="80"
                            height="80"
                            className="d-inline-block align-top" />
                            {team.team.name}
                        </td>
                        <td>{team.points}</td>
                        <td>{team.goalsDiff}</td>
                        <td>{team.all.played}</td>
                        <td>{team.all.win}</td>
                        <td>{team.all.lose}</td>
                      </tr>
                    ))}
              </tbody>
            </Table>
          );
}

export default PremierLeague;