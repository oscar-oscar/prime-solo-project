import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './GameItem.css';


function GameItem({ game }) {
    console.log('in GameItem');

    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((store) => store.user);

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
        <Container maxWidth="sm">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
               
                    <Paper className='paper' elevation={3} sx={{ minWidth: 275, margin: 1 }}>

                        <div key={game.id}>

                            
                                <div className='dash-date'>Date Played: {formatDate(game.date)}</div>
                                <br />

                                
                                <div className='scoreA'>
                                    <div className={game.score_a > game.score_b ? 'win' : 'loss'}>
                                    <div className='myScore-title'>
                                        <h3>{user.username}</h3>
                                        <div>{game.partner ?
                                        <div> &amp; {game.partner}</div> : null}
                                    </div>

                                    </div>
                                        <h2>{game.score_a}</h2>
                                    </div>
                                    </div>

                                    <div className='scoreB'>
                                    <div className={game.score_b > game.score_a ? 'win' : 'loss'}>
                                    <div className='opponentScore-title'>
                                        <h3>{game.opponent_1}</h3>
                                        <div>{game.opponent_2 ?
                                        <div> &amp;  {game.opponent_2} </div> : null}
                                    </div>
                                        
                                     </div>
                                        <h2>{game.score_b}</h2></div>
                                    </div>

                                    {/* <div className='courtLocation'>Court Location : {game.location}</div> */}

                                    {/* <div>{game.partner ?
                                        <div>My Partner: {game.partner}</div> : null}
                                    </div> */}

                                    {/* <div>Played against: {game.opponent_1}</div> */}
                                    {/* <div>{game.opponent_2 ?
                                        <div> and {game.opponent_2} </div> : null}
                                    </div> */}

                                    <div className='notes'>{game.notes}</div>

                                    <br />

                                    <div className='seeDetails'><Button
                                        variant="contained" color="secondary" size="small"
                                        onClick={() => seeDetails(game)}>See Details</Button>
                                    </div>
                            
                        </div>
                    </Paper>
               
            </Grid>
        </Container>
    )
}

export default GameItem;