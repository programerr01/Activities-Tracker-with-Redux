import React from 'react';
import { useDispatch } from 'react-redux';
import Box from '@material-ui/core/Box';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "@material-ui/core/Button";

export default function Activity(props) {
    const dispatch = useDispatch();
    function deleteActivity() {
        dispatch({
            type: 'DELETE',
            payload: props.id,
        })
    }

    return (
        <Box style={useStyles} className={"activity-wrapper"}>
            <Box flexGrow={2}>{props.name} </Box> <Box flexGrow={1}>{props.duration}</Box>
            <Button style={buttonStyle} onClick={deleteActivity}> <DeleteIcon /> </Button>
            
        </Box>
    )
}
const buttonStyle = {
    background: 'Linear-gradient(45deg,#ff434380 30% ,#ff434670 70%)',
    border: 0,
    borderRadius: '10%',
    boxShadow: '0 0.5px 2px 0.3px #ff3311',
    color:'white',
}
const useStyles =
{
    fontFamily: 'Alegreya Sans, sans-serif',
    fontSize: '18px',
    marginTop:"10px",
    display:"flex",
    background: '#eeefef',
    borderRadius: 5,
    boxShadow: '0 2px 1px 1px gray',
    
}