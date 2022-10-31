//user log game form
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import './AddGame.css';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SinglesForm from '../SinglesForm/SinglesForm';
import DoublesForm from '../DoublesForm/DoublesForm';


function AddGame() {
    console.log('in AddGame');

    const [matchType, setMatchType] = useState('Select');

    const [singles, setSingles] = useState("false");
    const [doubles, setDoubles] = useState("false");

    const handleOnChange = (e) => {
        setMatchType(e.target.value);
    };

    useEffect(() => {
       
        matchType === "doubles" ? setDoubles(true) : setDoubles(false);
        matchType === "singles" ? setSingles(true) : setSingles(false);
    },[matchType])
    

    return (
        <>
                <div className="page-title">
                        <h2>Add Game Details</h2>
                    </div>

            <div className="match-type-title">
                    <h2> Select Singles or Doubles  </h2>
                    <InputLabel id="drop-down">Match Type</InputLabel>
                    <Select 
                    className="form-select" 
                    placeholder="Select Match"
                    label="Select Match"
                    value={matchType} 
                    onChange={handleOnChange}>
                        <MenuItem value="Select">Select Match Type</MenuItem>
                        <MenuItem value="singles">Singles</MenuItem>
                        <MenuItem value="doubles">Doubles</MenuItem>
                    </Select>
            </div>
            <div>
                {singles && <SinglesForm  />}
                {doubles && <DoublesForm />}
            </div>
        </>
    )
}

export default AddGame;
