//user log game form
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import './DoublesForm.css';



function DoublesForm() {
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

    const [matchType, setMatchType] = useState('');


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
        <>
            <div className="game-form">
                <form onSubmit={sumbitForm}>

                    <TextField sx={{ width: '25ch', margin: 3, marginTop: 1 }}
                        type="date"
                        required
                        color="secondary"
                        value={gameDate}
                        onChange={(event) => setGameDate(event.target.value)}
                    />
                    <br />

                    <TextField sx={{ width: '25ch', margin: 3, marginTop: 1 }}
                        label="Partner's Name"
                        type="text"
                        placeholder="Enter My Partner's Name"
                        name="myScore"
                        color="secondary"
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
                        color="secondary"
                        value={opponentOneName}
                        onChange={(event) => setOpponentOneName(event.target.value)}
                    />
                    <br />
                    <TextField sx={{ width: '25ch', margin: 3, marginTop: 1 }}
                        label="Opponent Two"
                        type="text"
                        placeholder="Enter Second Oppoenent's Name"
                        name="oppenent-2"
                        color="secondary"
                        value={opponentTwoName}
                        onChange={(event) => setOpponentTwoName(event.target.value)}
                    />
                    <br />

                    <TextField sx={{ width: '25ch', margin: 3, marginTop: 1 , inputMode: 'numeric', pattern: '[0-99]'}}
                        label="My Score"
                        type="number"
                        required
                        placeholder="My Score"
                        name="myScore"
                        color="secondary"
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
                        color="secondary"
                        value={oppScore}
                        onChange={(event) => {
                            const limit = 2;
                            setOppScore(event.target.value.slice(0, limit));
                        }}
                    />
                    <br />

                    <TextField sx={{ width: '25ch', margin: 3, marginTop: 1 }}
                        label="Location"
                        type="text"
                        required
                        placeholder="Enter city or court name"
                        name="location"
                        color="secondary"
                        value={courtlocation}
                        onChange={(event) => setCourtlocation(event.target.value)}
                    />

                    <TextField sx={{ width: '25ch', margin: 3, marginTop: 1 }}
                        id="outlined-multiline-flexible"
                        multiline
                        maxRows={2}
                        type="text"
                        required
                        placeholder="Enter notes here limit 120 characters"
                        name="note"
                        color="secondary"
                        value={notes}
                        onChange={(event) => setNotes(event.target.value)}
                    />
                    <Stack spacing={4}>
                        <Button sx={{ padding: 1, width: 1 }} color="primary" variant="contained" input type="submit">Submit</Button>
                        <Button sx={{ padding: 1, width: 1 }} color="secondary" variant="contained" onClick={() => history.push('/dashboard')}>Back</Button>

                    </Stack>

                </form>
            </div>

        </>
    )
}

export default DoublesForm;
