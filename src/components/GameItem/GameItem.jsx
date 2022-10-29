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


function GameItem({ game }) {
    console.log('in GameItem');

    const dispatch = useDispatch();
    const history = useHistory();

    //game that we click on
    const seeDetails = (gameToDisplay) => {
        console.log('in seeDetails', gameToDisplay);
        dispatch({ type: 'SET_GAME_DETAILS', payload: gameToDisplay });
        history.push(`/details/${gameToDisplay.id}`);
        //end of seeDetails
    }
    
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    }

    return (
        <div key={game.id}>
            <div>Game Date: {formatDate(game.date)} </div><br />

            <div>My Score: {game.score_a}
                Opponent : {game.score_b}
            </div>

            <div>Location: {game.location}</div>

            {game.partner ?
                <div>My Partner: {game.partner}</div> : null}

            <div>Played against: {game.opponent_1}</div>
            {game.opponent_2 ?
                <div> and {game.opponent_2} </div> : null}
            <br />

            <div>Game Comment:{game.notes}</div>

            <Button sx={{ margin: 2 }}
                variant="contained" color="secondary" size="small"
                onClick={() => seeDetails(game)}>See Details</Button>
        </div>
    )
}

export default GameItem;