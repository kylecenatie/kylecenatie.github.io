import React from "react";
import Table from "react-bootstrap/Table"
import Container from "react-bootstrap/Container"
const TableHeaders = (props) => {
    return (
        <thead className="testAlign center">
        <tr>
            {props.category.map(item => (
                <th key={item}>
                    {item}
                </th>
            ))}
      </tr>
        </thead>
    );
  }

  const TableRows = (props) => {
    const team = props.team;
    const teamData = props.team.data;
    return(
            <tr key={team.rank} id={team.id} style={{cursor:'pointer'}} >
               <td>{team.rank}</td>
              <td >
                  <img src={team.logo}
                  width="42"
                  height="40"
                  className="d-inline-block align-middle" />
                  &emsp;{team.name}
              </td>
              {teamData && teamData.map((stat, index) =>(
                <td key={index}>{stat}</td>
              ))}
            </tr>
          )
  }
// SS needs standings = team team.rank, team.team.id, xteam., statsHeaders
const SportsStandings = (props) =>{
    // console.log(props)
 const standings = props.standings;
    const statsHeader = props.statHeaders;
    // FIGURE OUT HOW TO SEND INDIVIDUAL AND Iterate through them. 
    return (
     
        <Container>
        <Table bordered hover responsive>
        <TableHeaders category={statsHeader} />
          <tbody className="textAlign">
          {standings && standings.map(team => (
                 <TableRows team={team} key={team.name} />
                ))}
          </tbody>
        </Table>
        </Container>
      );
}

export default SportsStandings;