import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LogGame from '../AddGame/AddGame';

//this is the main page of the app
//user should see a list of their games played
// using state to test
function Dashboard() {

    // let [gameList, setGameList] = useState([]);
    const dispatch = useDispatch();
    const gameList = useSelector(store => store.gameList);
    const history = useHistory();

    const getGames = () => {
        //replacing with game.saga.js
        dispatch({ type: 'FETCH_GAME_LIST' });

        // axios.get('/dashboard').then(response => {
        //     console.log(response.data);
        //     setGameList(response.data);
        // }).catch(e => {
        //     console.log(e);
        //     alert('something went wrong in axios GET getGames');
        // })
    }//end of getGames

    //game that we click on
    const seeDetails = (gameToDisplay) => {
        console.log('in seeDetails', gameToDisplay);
        dispatch({ type: 'SET_GAME_DETAILS', payload: gameToDisplay });
        history.push(`/details/${gameToDisplay.id}`);
    }//end of seeDetails

    useEffect(() => {
        getGames();
    }, []);


    return (
        <div>
            <h3>Game List</h3>
            <button onClick={() => history.push('/add')} className="button">Log Game</button>
            <ul>
                {gameList.map(game => {
                    return (
                        <li key={game.id}>
                            <div>Game Date: <h3>{game.date}</h3></div><br />
                            <div>My Score: {game.score_a} Opponent : {game.score_b}</div>
                            <div>Location: {game.location}</div>
                            
                            {game.partner ?
                                <div><h2>My Partner:{game.partner}</h2></div> : null}

                            <div>Played against: {game.opponent_1}</div>
                            {game.opponent_2 ?
                                <div><h2>and {game.opponent_2}</h2></div> : null}
                            <br />

                            <button onClick={() => seeDetails(game)}>See Details</button>


                        </li>
                    )
                })}
            </ul>
        </div>
    )







}




export default Dashboard;
