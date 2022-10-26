import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LogGame from '../AddGame/AddGame';
import Grid2 from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import './Dashboard.css';


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
        <div className="game-list">
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={12} >

                    <div>
                        <div className="game-list-h2"><h2>Game List</h2></div>
                    </div>
                    <Button sx={{ margin: 2 }} color="primary" variant="contained" onClick={() => history.push('/add')} className="button">Log New Game</Button>
                    <ul>
                        {gameList.map(game => {
                            return (
                                <li key={game.id}>
                                    <div>Game Date: {game.date} </div><br />
                                    <div>My Score: {game.score_a} Opponent : {game.score_b}</div>
                                    <div>Location: {game.location}</div>

                                    {game.partner ?
                                        <div>My Partner: {game.partner}</div> : null}

                                    <div>Played against: {game.opponent_1}</div>
                                    {game.opponent_2 ?
                                        <div> and {game.opponent_2} </div> : null}
                                    <br />

                                    <button onClick={() => seeDetails(game)}>See Details</button>


                                </li>
                            )
                        })}
                    </ul>
                </Grid>
            </Grid>
        </div>
    )







}




export default Dashboard;
