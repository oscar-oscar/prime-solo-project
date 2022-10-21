//game reducer
//remeber to import into root.reducer.js
const gameList = (state = [], action) => {
    switch (action.type) {
        case 'SET_GAME_LIST':
            return action.payload;
        default:
            return state;
    }
}

export default gameList;