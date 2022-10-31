import axios from 'axios';
import { actionChannel, put, takeEvery, takeLatest } from 'redux-saga/effects';

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

function* addGame(action){
    console.log('in *logGame');
    try{
        yield axios.post('/dashboard', action.payload);
        console.log('in POST')
        // action.clearForm(); //clears form after success
        // //after posting
        yield put({ type: 'FETCH_GAME_LIST' });
    } catch(error){
        console.log('error in POST axios', error);
        alert('Something went wrong trying to Log New Game');
    }
}

function* addSinglesGame(action){
    console.log('in add Singles Game');
    try{
        yield axios.post('/dashboard', action.payload);
        console.log('in POST')
        // action.clearForm(); //clears form after success
        // //after posting
        yield put({ type: 'FETCH_GAME_LIST' });
    } catch(error){
        console.log('error in POST axios', error);
        alert('Something went wrong trying to Log New Game');
    }
}

function* editSinglesGame(action){
    try{// action.payload.id = id passed in our dispatch payload in SinglesForm comp
        //action.payload = optional put req data (all other properties passed)
        yield axios.put(`/details/${action.payload.id}`, action.payload); 
        console.log('in PUT edit Singles Game')
        if (action.history){//fail safe : remember this on group projects
            action.history.goBack();  //removes edit page from history and avoids going back into edit form. Best UX practice
        }
    } catch(error){
        console.log(error, 'error in editSinglesGame')
    }
}


function* gameSaga() {
    //listening for actions to call functions
    yield takeLatest('FETCH_GAME_LIST', fetchGameList)
    yield takeLatest('FETCH_GAME_DETAILS', fetchGameDetails);
    yield takeLatest('ADD_GAME', addGame);
    yield takeLatest('ADD_SINGLES_GAME', addSinglesGame)
    yield takeLatest('EDIT_SINGLES_GAME', editSinglesGame);
    
}

export default gameSaga;