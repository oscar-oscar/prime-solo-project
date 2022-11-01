import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector, } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Ball from '../images/wiffleball.png';
import './UserPage.css';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';



function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const gameList = useSelector(store => store.gameList);
  const history = useHistory();

  return (
    <Container>
      <div className="container">

        <h1 className='welcome'>Welcome, {user.username}!</h1>

       
          <Paper sx={{ minWidth: 275, margin: 1 }} className="ball"
            onClick={() => history.push('/dashboard')}  >
            <img src={Ball} width="100" height="100"
              onClick={() => history.push('/dashboard')} />

            <h4 className='tap'>Tap for Game History</h4>

          </Paper>
       

        <Box>
          <Paper className='user-record-paper' >
            <div className='user-record'>
              <h3>Current Record </h3>
              <h3 className="user-record-w">Wins: {gameList.filter(game => game.score_a > game.score_b).length}</h3>
              <h3 className='user-divider'>|</h3>
              <h3 className="user-record-l">Losses: {gameList.filter(game => game.score_a < game.score_b).length}</h3>
              <h2 className='skill-level'>Skill Level : 2.5</h2>
            </div>
          </Paper>
        </Box>

        
            <div className='user-matches'>
              <h3>Upcoming Matches </h3>
              <ul>
                <li>
                  No upcoming matches
                </li>
              </ul>
            </div>


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
    </Container>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
