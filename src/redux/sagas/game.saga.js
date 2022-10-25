import axios from 'axios';
import { actionChannel, put, takeLatest } from 'redux-saga/effects';

function* fetchGameList() {
    try {
        const game = yield axios.get('/dashboard');
        yield put({ type: 'SET_GAME_LIST', payload: game.data });
    } catch (error) {
        console.log('Game list get request failed', error);
    }
}

function* fetchGameDetails(action){
    try{
        //specific gamve from server. 
        const fetchGame = yield axios.get(`/details/${action.payload}`);
        yield put({ type: 'SET_GAME_DETAILS', payload: fetchGame.data});
        //maybe add the setMatch in here ?
    }catch(error){
        console.log('fetchGameDetails error', error);
    }
}

function* logGame(action){
    console.log('in *logGame');
    try{
        yield axios.post('/log-game', action.payload);
        console.log('in POST')
        // action.clearForm(); //clears form after success
        // //after posting
        yield put({ type: 'FETCH_GAME_DETAILS' });
    } catch(error){
        console.log('error in POST axios * logNewGame', error);
        alert('Something went wrong trying to Log New Game');
    }
}


function* gameSaga() {
    //listening for actions to call functions
    yield takeLatest('FETCH_GAME_LIST', fetchGameList)
    yield takeLatest('FETCH_GAME_DETAILS', fetchGameDetails);
    yield takeLatest('LOG_GAME', logGame);
    
}

export default gameSaga;