//loggin newGame reducer
//remeber to import into root.reducer.js

const logGame = (state = {}, action) => {
    switch (action.type) {
        //listen for LOG GAME 
        case 'LOG_GAME':
            return action.payload;
        default:
            return state;
    }
}

export default logGame;