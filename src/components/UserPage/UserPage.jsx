import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';

import { useDispatch, useSelector ,} from 'react-redux';
import { useHistory } from 'react-router-dom';
import Ball from '../images/wiffleball.png'



function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const gameList = useSelector(store => store.gameList);
  const history = useHistory();

  // const getGames = () => {
  //     //replacing with game.saga.js
  //     dispatch({ type: 'FETCH_GAME_LIST' });

  // }//end of getGames

  // useEffect(() => {
  //     getGames();
  // }, []);


  return (
    <div className="container">
      <h1>Welcome, {user.username}!</h1>
    <div className='tap-promt'>
      <h1>Tap to see Game History! </h1><img src = {Ball} className="ball"  onClick={() => history.push('/dashboard')} />
     </div>

      <h2>Record to Date :
      <div className='record'>
                Wins :{gameList.filter(game => game.score_a > game.score_b).length} <br />
                Losses: {gameList.filter(game => game.score_a < game.score_b).length}
            </div>
      </h2>
      <div>
                {gameList.map(game => {
                    return (
                         < div key={game.id}
                         game={game} />
                         
                    )
                })}
            </div>
      {/* <p>Your ID is: {user.id}</p> */}
      {/* <LogOutButton className="btn" /> */}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
