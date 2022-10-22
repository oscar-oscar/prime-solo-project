import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

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
        axios.delete(`/details/${deleteGameId}`).then(() =>{
            console.log('successfull delete')
            history.push('/dashboard');
            
        }).catch((e) => {
          console.log(e);
          alert('something went wrong in deleteItem');
        })
      }

        

    useEffect(() => {
        dispatch({ type: 'FETCH_GAME_DETAILS', payload: gameId });
    }, [gameId])

    return (
        <div>
            <h2>DETAILS COMP</h2>
            <h3>Date Logged: {gameDetails.played_at}</h3>
            <h3>My Score: {gameDetails.score_a}</h3>
            <h3>Opponent Score: {gameDetails.score_b}</h3>
            <h3>Paired with: {gameDetails.partner}</h3>
            <h2>VS</h2>
            <h3>Location: {gameDetails.location}</h3>
            <h3><p>{gameDetails.notes}</p></h3>
           
            <h3>{gameDetails.opponent_1} &amp; {gameDetails.opponent_2}</h3>
            <button  style={{cursor: 'pointer'}} onClick={() => deleteGame(gameDetails.id)}>Delete</button>
        </div>
    )
}

export default Details;