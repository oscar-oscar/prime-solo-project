// //user log game form
// import React from 'react';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory, useParams } from 'react-router-dom';



// function AddSinglesGame() {
//     console.log('in AddGame');

//     const history = useHistory();
//     const dispatch = useDispatch();

//     const [myScore, setMyscore] = useState('');
//     const [oppScore, setOppScore] = useState('');
//     const [partnerName, setPartnerName] = useState('');
//     const [opponentOneName, setOpponentOneName] = useState('');
//     const [courtlocation, setCourtlocation] = useState('');
//     const [gameDate, setGameDate] = useState('');
//     const [notes, setNotes] = useState('');



//     // will dispatch here
//     const sumbitForm = (e) => {
//         e.preventDefault();//prevent reload
//         dispatch({
//             type: 'ADD_SINGLES_GAME',
//             payload: {
//                 date: gameDate,
//                 partner: partnerName,
//                 opponent_1 : opponentOneName,
//                 score_a: myScore,
//                 score_b: oppScore,
//                 location: courtlocation,
//                 notes: notes
//             }
//         })
//         history.push('/dashboard'); //push this to success page after testing
//     }

//     const handleNotes = (e) => {const { makeNote } = e.target;
//         setNotes(makeNote);
//       };

//     return (
//         <div>
//             <form onSubmit={sumbitForm}>
//                 <h2>Add Singles Game Info</h2>

//                 <label>Date of Game</label>
//                 <input
//                     type="date"
//                     required
//                     value={gameDate}
//                     onChange={(event) => setGameDate(event.target.value)}
//                 />
//                 <br/>

//                 {/* <label>Match Type</label>
//                 <select>
//                     <option value="singles">Singles</option>
//                     <option value="doubles">Doubles</option>
//                 </select> */}

//                 <label>Opponent's Name</label>
//                 <input
//                     type="text"
//                     required
//                     placeholder="Enter Oppoenent's Name"
//                     name="oppenent"
//                     value={opponentOneName}
//                     onChange={(event) => setOpponentOneName(event.target.value)}
//                 />
//                 <br/>
//                 <label>My Score</label>
//                 <input
//                     type="text"
//                     required
//                     placeholder="Enter My Score"
//                     name="myScore"
//                     value={myScore}
//                     onChange={(event) => {
//                         const limit = 2;
//                         setMyscore(event.target.value.slice(0, limit));
//                     }}
//                 />

//                 <label>Opp Score</label>
//                 <input
//                     type="text"
//                     required
//                     placeholder="Enter Opponents Score"
//                     name="oppScore"
//                     value={oppScore}
//                     onChange={(event) => {
//                         const limit = 2;
//                         setOppScore(event.target.value.slice(0, limit));
//                     }}
//                 />
//                 <br/>
//                 <label>Location</label>
//                 <input
//                     type="text"
//                     required
//                     placeholder="Enter city or court name"
//                     name="location"
//                     value={courtlocation}
//                     onChange={(event) => setCourtlocation(event.target.value)}
//                 />
//                 <input type="submit" />
//             </form>
//         </div>
//     )
// }

// export default AddSinglesGame;
