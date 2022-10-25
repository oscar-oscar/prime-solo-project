//user log game form
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import DatePicker from "react-date-picker";


function LogGame() {
    console.log('in AddGame');
    const history = useHistory();
    const scoreA = useSelector(store => store.score_a);
    const scoreB = useSelector(store => store.score_b);
    const partner = useSelector(store => store.partner);
    const opponentOne = useSelector(store => store.opponent_1)
    const opponentTwo = useSelector(store => store.opponent_2)


    const dispatch = useDispatch();



    const [newGame, setNewGame] = useState('testing');
    const [myScore, setMyscore] = useState('');
    const [oppScore, setOppScore] = useState('');
    const [partnerName, setPartnerName] = useState('');
    const [opponentOneName, setopponentOneName] = useState('');
    const [opponentTwoName, setOpponentTwoName] = useState('');





    // will dispatch here
    const handleSubmit = (e) => {
        e.preventDefault();//prevent reload
        dispatch({
            type: 'SET_GAME',
            payload: {
                date: newGame.date,
                type: newGame.type,
                partner: newGame.partner,
                opponentOne: newGame.opponent_1,
                opponentTwo: newGame.opponent_2,
                scoreA: newGame.score_a,
                scoreB: newGame.score_b
            }
        })
        history.pushState('/dashboard'); //push this to success page after testing
    }



    return (
        <form >
            <h2>FORM TEST</h2>

            <label>Date of Game</label>
            <input
                type="date"
                required
            />

            <label>Match Type</label>
            <select>
                <option value="singles">Singles</option>
                <option value="doubles">Doubles</option>
            </select>

            <label>Partner</label>
            <input
                type="text"
                placeholder="Enter My Partner's Name"
                name="myScore"
                value={partner}
                onChange={(event) =>
                    setPartnerName({ ...setPartnerName(event.target.value) })
                }
            />

            <label>Opponent's Name</label>
            <input
                type="text"
                placeholder="Enter Oppoenent's Name"
                name="oppenent"
                value={partner}
                onChange={(event) =>
                    setopponentOneName({ ...setopponentOneName(event.target.value) })
                }
            />

            <label>Second Opponent's Name</label>
            <input
                type="text"
                placeholder="Enter Second Oppoenent's Name"
                name="oppenent-2"
                value={partner}
                onChange={(event) =>
                    setOpponentTwoName({ ...setOpponentTwoName(event.target.value) })
                }
            />

            <label>My Score</label>
            <input
                type="number"
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
                type="number"
                placeholder="Enter Opponents Score"
                name="oppScore"
                value={oppScore}
                onChange={(event) => {
                    const limit = 2;
                    setOppScore(event.target.value.slice(0, limit));
                }}
            />
            <button>Add Game</button>
        </form>
    )
}

export default LogGame;
