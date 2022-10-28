import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LogGame from '../AddGame/AddGame';
import Grid2 from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import './Dashboard.css';
import GameItem from '../GameItem/GameItem';


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

    }//end of getGames

    useEffect(() => {
        getGames();
    }, []);


    return (
        <div className="game-list">
            <div>
                <div className="page-title"><h2>Game List</h2></div>
            </div>

            <div><Button style={{ margin: 'auto', display: "flex" }}
                color="primary" variant="contained" 
                onClick={() => history.push('/add')}
                className="button">+ Add New Game</Button></div>

            <ul>
                {gameList.map(game => {
                    return (
                         <GameItem 
                         key={game.id}
                         game={game} />
                    )
                })}
            </ul>
        </div>
    )







}




export default Dashboard;
