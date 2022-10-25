//user log game form
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

function LogGame() {
    console.log('in AddGame');
    
    const [newGame, setNewGame] = useState('testing');

    const logNewGame = (e) => {
        e.preventDefault();
        axios.post('/dashboard', { description: newGame }).then(() => {
            // history.push('/dashboard'); // send to sucess instaed of dash after tesing
        }).catch((e) => {
            console.log(e);
            alert('something went wrong');
        })
    }

    return (
        <form onSubmit={logNewGame}>
        <input value={newGame} onChange={(e) => setNewGame(e.target.value)} type="text" />
        <input type="submit" />
    </form>
    )
}

export default LogGame;
