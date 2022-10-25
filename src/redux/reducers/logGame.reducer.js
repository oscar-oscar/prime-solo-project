//loggin newGame reducer
//remeber to import into root.reducer.js

const logGame = (state = {}, action) => {
    switch (action.type) {
        //listen for SET GAME 
        case 'SET_GAME':
            return action.payload;
        default:
            return state;
    }
}

export default logGame;