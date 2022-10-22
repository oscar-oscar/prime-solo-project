//single selectedGame

const selectedGame = (state = {}, action) => {
    switch (action.type) {
        //listen for SET GAME DETAILS
        case 'SET_GAME_DETAILS':
            //returns game data fetched in saga 
            return action.payload;
        default:
            return state;
    }
}

export default selectedGame;