//user log game form
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import './AddGame.css';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';


function AddGame() {
    console.log('in AddGame');

    const history = useHistory();
    const dispatch = useDispatch();

    const [myScore, setMyscore] = useState('');
    const [oppScore, setOppScore] = useState('');
    const [partnerName, setPartnerName] = useState('');
    const [opponentOneName, setOpponentOneName] = useState('');
    const [opponentTwoName, setOpponentTwoName] = useState('');
    const [courtlocation, setCourtlocation] = useState('');
    const [gameDate, setGameDate] = useState('');
    const [notes, setNotes] = useState('');


    // will dispatch here
    const sumbitForm = (e) => {
        e.preventDefault();//prevent reload
        dispatch({
            type: 'ADD_GAME',
            payload: {
                date: gameDate,
                partner: partnerName,
                opponent_1: opponentOneName,
                opponent_2: opponentTwoName,
                score_a: myScore,
                score_b: oppScore,
                location: courtlocation,
                notes: notes

            }
        })
        history.push('/dashboard'); //push this to success page after testing
    }

    return (
        <Container>

            <div className="game-form">
                <form onSubmit={sumbitForm}>

                    <div class="AddGameH2">
                        <h2>Add Game Info</h2>
                    </div>

                   
                    <TextField sx={{ width: '25ch', margin: 3, marginTop: 1 }}
                        type="date"
                        required
                        value={gameDate}
                        onChange={(event) => setGameDate(event.target.value)}
                    />
                    <br />

                    {/* <label>Match Type</label>
                <select>
                    <option value="singles">Singles</option>
                    <option value="doubles">Doubles</option>
                </select> */}

                    
                    <TextField sx={{ width: '25ch', margin: 3, marginTop: 1 }}
                        label="Partner's Name"
                        type="text"
                        placeholder="Enter My Partner's Name"
                        name="myScore"
                        value={partnerName}
                        onChange={(event) => setPartnerName(event.target.value)}
                    />
                    <br />
                    <TextField sx={{ width: '25ch', margin: 3, marginTop: 1 }}
                        label="Opponent One"
                        type="text"
                        required
                        placeholder="Enter Oppoenent's Name"
                        name="oppenent"
                        value={opponentOneName}
                        onChange={(event) => setOpponentOneName(event.target.value)}
                    />
                    <br />
                    <TextField sx={{ width: '25ch', margin: 3, marginTop: 1 }}
                        label="Opponent Two"
                        type="text"
                        placeholder="Enter Second Oppoenent's Name"
                        name="oppenent-2"
                        value={opponentTwoName}
                        onChange={(event) => setOpponentTwoName(event.target.value)}
                    />
                    <br />

                    <TextField sx={{ width: '25ch', margin: 3, marginTop: 1 }}
                        label="My Score"
                        type="number"
                        required
                        placeholder="My Score"
                        name="myScore"
                        value={myScore}
                        onChange={(event) => {
                            const limit = 2;
                            setMyscore(event.target.value.slice(0, limit));
                        }}
                    />
                    
                    <TextField sx={{ width: '25ch', margin: 3, marginTop: 1 }}
                        label="Opponent Score"
                        type="number"
                        required
                        placeholder="Opponents Score"
                        name="oppScore"
                        value={oppScore}
                        onChange={(event) => {
                            const limit = 2;
                            setOppScore(event.target.value.slice(0, limit));
                        }}
                    />
                    <br />

                    <TextField sx={{ width: '25ch' , margin: 3, marginTop: 1 }}
                        label="Location"
                        type="text"
                        required
                        placeholder="Enter city or court name"
                        name="location"
                        value={courtlocation}
                        onChange={(event) => setCourtlocation(event.target.value)}
                    />
                    <Button sx={{ margin: 4 }} color="primary" variant="contained" onClick={() => history.push('/dashboard')}>Back</Button>
                    <Button input type="submit">Submit</Button>

                </form>
            </div>

        </Container>
    )
}

export default AddGame;
