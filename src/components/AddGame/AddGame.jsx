//user log game form
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import DatePicker from "react-date-picker";


function AddGame() {
    console.log('in AddGame');

    const history = useHistory();
    const dispatch = useDispatch();

    // const scoreA = useSelector(store => store.score_a);
    // const scoreB = useSelector(store => store.score_b);
    // const partner = useSelector(store => store.partner);
    // const opponentOne = useSelector(store => store.opponent_1);
    // const opponentTwo = useSelector(store => store.opponent_2);
    // const date = useSelector(store => store.date);
    // const location = useSelector(store => store.location);


    const [newGame, setNewGame] = useState([]);
    const [myScore, setMyscore] = useState('');
    const [oppScore, setOppScore] = useState('');
    const [partnerName, setPartnerName] = useState('');
    const [opponentOneName, setOpponentOneName] = useState('');
    const [opponentTwoName, setOpponentTwoName] = useState('');
    const [courtlocation, setCourtlocation] = useState('');
    const [gameDate, setGameDate] = useState('');



    // will dispatch here
    const sumbitForm = (e) => {
        e.preventDefault();//prevent reload
        dispatch({
            type: 'ADD_GAME',
            payload: {
               
                partner: partnerName,
                opponent_1 : opponentOneName,
                opponent_2 : opponentTwoName,
                score_a: myScore,
                score_b: oppScore,
                location: courtlocation,

            }, history
        })
        history.push('/dashboard'); //push this to success page after testing
    }



    return (
        <div>
            <form onSubmit={sumbitForm}>
                <h2>Add Game Info</h2>

                {/* <label>Date of Game</label>
                <input
                    type="date"
                    required
                    value={gameDate}
                    onChange={(event) => setGameDate(event.target.value)}
                />
                <br/> */}

                {/* <label>Match Type</label>
                <select>
                    <option value="singles">Singles</option>
                    <option value="doubles">Doubles</option>
                </select> */}

                <label>Partner</label>
                <input
                    type="text"
                    placeholder="Enter My Partner's Name"
                    name="myScore"
                    value={partnerName}
                    onChange={(event) => setPartnerName(event.target.value)}

                />
                <br/>

                <label>Opponent's Name</label>
                <input
                    type="text"
                    required
                    placeholder="Enter Oppoenent's Name"
                    name="oppenent"
                    value={opponentOneName}
                    onChange={(event) => setOpponentOneName(event.target.value)}
                />

                <label>Second Opponent's Name</label>
                <input
                    type="text"
                    placeholder="Enter Second Oppoenent's Name"
                    name="oppenent-2"
                    value={opponentTwoName}
                    onChange={(event) => setOpponentTwoName(event.target.value)}

                />
                <br/>
                <label>My Score</label>
                <input
                    type="text"
                    required
                    placeholder="Enter My Score"
                    name="myScore"
                    value={myScore}
                    onChange={(event) => {
                        const limit = 2;
                        setMyscore(event.target.value.slice(0, limit));
                    }}

                />

                <label>Opp Score</label>
                <input
                    type="text"
                    required
                    placeholder="Enter Opponents Score"
                    name="oppScore"
                    value={oppScore}
                    onChange={(event) => {
                        const limit = 2;
                        setOppScore(event.target.value.slice(0, limit));
                    }}
                />
                <br/>
                <label>Location</label>
                <input
                    type="text"
                    required
                    placeholder="Enter city or court name"
                    name="location"
                    value={courtlocation}
                    onChange={(event) => setCourtlocation(event.target.value)}
                />
                <input type="submit" />
            </form>
        </div>
    )
}

export default AddGame;
