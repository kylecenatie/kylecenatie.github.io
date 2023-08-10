import React from "react";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table"
import Container from "react-bootstrap/Container"



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
  }, [standings]);

  const displayTeam =event=>{
    console.log(event.target.parentElement.id)
  }

        return (
            <Container>
            <Table bordered hover responsive>
              <thead className="test-align center">
                <tr>
                  <th>Rank</th>
                    <th>Team</th>
                    <th>Played</th>
                    <th>Win</th>
                    <th>Loss</th>
                    <th>Draw</th>
                    <th>GF</th>
                    <th>GA</th>
                    <th>GD</th>
                    <th>Points</th>
                </tr>
              </thead>
              <tbody className="text-align center">
              {standings && standings.map(team => (
                      <tr key={team.rank} id={team.team.id} style={{cursor:'pointer'}} onClick={displayTeam}>
                         <td>{team.rank}</td>
                        <td >
                            <img src={team.team.logo}
                            width="40"
                            height="40"
                            className="d-inline-block align-middle" />
                            &emsp;{team.team.name}
                        </td>
                        <td>{team.all.played}</td>
                        <td>{team.all.win}</td>
                        <td>{team.all.lose}</td>
                        <td>{team.all.draw}</td>
                        <td>{team.all.goals.for}</td>
                        <td>{team.all.goals.against}</td>
                        <td>{team.goalsDiff}</td>
                        <td>{team.points}</td>
                      </tr>
                    ))}
              </tbody>
            </Table>
            </Container>
          );
}

export default PremierLeague;