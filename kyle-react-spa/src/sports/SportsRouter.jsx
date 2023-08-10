import React, { useEffect } from "react";
import { useParams} from "react-router-dom"
import Nba from "./Nba";
import NhlStandings from "./NhlStandings";
import PremLeague from "./PremLeague";
import SportsHome from "./SportsHome";


const SportsRouter = () =>  {
    const params = useParams();
    const id = params.id;
    console.log(params);
    // const [page, setPage] = ("home")
    // useEffect(()=>{
    //     if(id === )

    // }, [eastStandings, westStandings, logo]);
    if(!id){
        return(
            <SportsHome />
        );
    }
    if(id ==="pl"){
        return(
            <PremLeague />
        );
    }
    if(id ==="nhl"){
        return(
           <NhlStandings />
        );
    }
    if(id ==="nba"){
        return(
         <Nba />
        );
    }
    if(id ==="mlb"){
        return(
            <Nba />
        );
    }

}

export default SportsRouter;