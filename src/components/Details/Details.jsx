import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import '../GameItem/GameItem.css';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

function Details() {
    console.log('in Details comp');
    //pull out data from redux
    const gameDetails = useSelector(store => store.selectedGame)
    const { gameId } = useParams();
    //dispatch to communicate w/sagas and reducers
    const dispatch = useDispatch();
    const history = useHistory();
    // pull out match data from redux
    // const match = useSelector(store => store.selectedMatch)

    const deleteGame = (deleteGameId) => {
        axios.delete(`/details/${deleteGameId}`).then(() => {
            console.log('successfull delete')
            history.push('/dashboard');

        }).catch((e) => {
            console.log(e);
            alert('something went wrong in deleteItem');
        })
    }
    
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    }


    useEffect(() => {
        dispatch({ type: 'FETCH_GAME_DETAILS', payload: gameId });
    }, [gameId])

    return (
        <div>
         <Box>
         <Paper className='details-block' sx={{  padding: 2}} >
            <div className='details-title'>Game Details</div>

            <h3>Date Logged: {formatDate(gameDetails.date)} </h3>
            <h3>My Score: {gameDetails.score_a}</h3>
            <h3>Opponent Score: {gameDetails.score_b}</h3>
            <h3>Paired with: {gameDetails.partner}</h3>
            <h2>VS</h2>
            <h3>{gameDetails.opponent_1} &amp; {gameDetails.opponent_2}</h3>
            <h3>Location: {gameDetails.location}</h3>
            <br />
            <Stack spacing={3}>
                <Button sx={{ padding: 1, width: 1 }} color="primary" variant="contained" onClick={() => history.push('/dashboard')}>Back to Game List</Button>
                <Button sx={{ padding: 1, width: 1 }} color="primary" variant="contained" onClick={() => history.push(`/edit/${gameDetails.id}`)}>Edit</Button>
                <Button sx={{ padding: 1, width: 1 }} color="error" variant="contained" onClick={() => deleteGame(gameDetails.id)}>Delete This Game</Button>
            </Stack>
        </Paper>
        </Box>
        </div>

    )
}

export default Details;

