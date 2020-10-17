import React, {useState} from 'react';
import Activity from './Activity';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';import {useSelector} from 'react-redux';
import AddActivity from './AddActivity';

const useStyles = makeStyles({
    root: {
        background: 'Linear-gradient(45deg,#b8f8f8 50% ,  #91ffff 50%)',
        border: 0,
        borderRadius: '10%',
        boxShadow: '0 3px 5px 2px #7fd9f0',
        height:40,
        color: 'white',
        padding:'0 20px',
    }
})

function Workouts() {
    const allActivities = useSelector(state => state.activities);
    const [add, setAdd] = useState(false);
    const classes = useStyles();
    return (
       
        <div>
            <h2>My Workouts</h2>
            <Button className={classes.root} onClick={() => setAdd(!add)}>Add Activity</Button>
            {add && <AddActivity />}
            {allActivities.map((e,i) => <Activity key={e.id} id={e.id} name={e.name} duration={e.duration} />)}
        </div>
    )
}


export default Workouts;