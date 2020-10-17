import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';
const AddActivity = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        name: "",
        duration: "",
    });

    function handleChange(e) {
        e.persist()
        setData(prev => ({...prev, [e.target.name]: e.target.value}))
        
    }

    function addActivity(){
        dispatch({
            type: "CREATE_ACTIVITY",
            payload: {
                ...data
            }
        })
    }

    return (
        <div className={"add"}>
            <div className="input-section">
               
                <TextField
                    required
                    onChange={(e) => handleChange(e)}
                    name="name"
                    variant="outlined"
                    label="Activity Name"
                    size="small"
                />
            </div>
            <div className="input-section">
            
                <TextField
                    required
                    onChange={(e) => handleChange(e)}
                    name="duration"
                    label="Duration"
                    variant="outlined"
                    size="small"
                />
            </div>
            <Button
                size="large"
                style={buttonStyle}
                onClick={addActivity}
            > <AddCircleIcon  fontSize="large"/>
            </Button>
        </div>
    )
};
const buttonStyle = {
    background: 'Linear-gradient(45deg,#b8f8f8 50% ,  #91ffff 50%)',
    border: 0,
    borderRadius: '10%',
    boxShadow: '0 1px 2px 1px #7fd9f0',
    height: 38,
    marginTop:'5px',
    padding: '22px 0px',
    
}

export default AddActivity;