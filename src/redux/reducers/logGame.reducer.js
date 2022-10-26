//loggin newGame reducer
//remeber to import into root.reducer.js

const addGame = (state = {}, action) => {
    switch (action.type) {
        //listen for LOG GAME 
        case 'ADD_GAME':
            return action.payload;
        default:
            return state;
    }
}

export default addGame;