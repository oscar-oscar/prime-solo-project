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

function* gameSaga() {
    yield takeLatest('FETCH_GAME_LIST', fetchGameList);
    
}

export default gameSaga;