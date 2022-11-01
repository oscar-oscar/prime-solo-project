import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import '../GameItem/GameItem.css';
import '../Details/Details.css';
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
    const user = useSelector((store) => store.user);
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
        <>
            <div className="page-title"><h2>Game Details</h2></div>

            <div>
                <Box>
                    <Paper className='details-block' sx={{ padding: 2 }} >


                        <div className='details-dash-date'>Date Played: {formatDate(gameDetails.date)} </div>

                        <div className='details-scoreA'>
                            <div className={gameDetails.score_a > gameDetails.score_b ? 'win' : 'loss'}>
                                <div>
                                    <h3>{user.username}
                                        <div>{gameDetails.partner ? <div> &amp; {gameDetails.partner}</div> : null}
                                        </div>
                                    </h3>
                                </div>
                                <h2>{gameDetails.score_a}</h2>
                            </div>
                        </div>

                        <div className='details-scoreB'>
                            <div className={gameDetails.score_b > gameDetails.score_a ? 'win' : 'loss'}>
                                <div>
                                    <h3>{gameDetails.opponent_1}
                                        <div>{gameDetails.opponent_2 ?
                                            <div> &amp; {gameDetails.opponent_2} </div> : null}
                                        </div></h3>
                                </div>
                                <div>
                                    <h2>{gameDetails.score_b}</h2></div>
                            </div>
                        </div>

                        <div className='details-location'>
                            <p>Location : {gameDetails.location}</p>
                        </div>
                        <div className='details-notes'>
                            <p>Game Notes : {gameDetails.notes}</p>
                        </div>
                    </Paper>
                </Box>

                {/* <h3>My Score: {gameDetails.score_a}</h3>
            <h3>Opponent Score: {gameDetails.score_b}</h3>
            <h3>Paired with: {gameDetails.partner}</h3>
            <h2>VS</h2>
            <h3>{gameDetails.opponent_1} &amp; {gameDetails.opponent_2}</h3>
            <h3>Location: {gameDetails.location}</h3> */}
                <br />
                <Stack spacing={3}>
                    <Button sx={{ padding: 1, width: 1 }} color="primary" variant="contained" onClick={() => history.push('/dashboard')}>Back to Game List</Button>
                    <Button sx={{ padding: 1, width: 1 }} color="secondary" variant="contained" onClick={() => history.push(`/edit/${gameDetails.id}`)}>Edit</Button>
                    <Button sx={{ padding: 1, width: 1 }} color="error" variant="contained" onClick={() => deleteGame(gameDetails.id)}>Delete This Game</Button>

                </Stack>

            </div>
        </>
    )
}

export default Details;

