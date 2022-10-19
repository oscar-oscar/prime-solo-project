import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

//this is the main page of the app
//user should see a list of their games played

function Dashboard() {

let [gameList, setGameList] = useState([]);

    const getGames = () => {
        axios.get('/dashboard').then(response => {
          console.log(response.data);
          setGameList(response.data);
        }).catch(e => {
          console.log(e);
          alert('something went wrong in axios GET getGames');
        })
      }

      useEffect(() => {
        getGames();
      }, []);


    return <div>
        <ul>
            <li>{JSON.stringify(gameList)}</li>
        
        </ul>
            
                {/* {
                    gameList.map(game => {
                        <li key = {game.id} />
                    })
                } */}
                
            
        
    </div>;
  }




export default Dashboard;
