import React, {useState} from 'react';
import Activity from './Activity';
import {useSelector} from 'react-redux';
import AddActivity from './AddActivity';

function Workouts() {
    const allActivities = useSelector(state => state.activities);
    const [add, setAdd] = useState(false);
    
    return (
        <div>
            <h2>My Workouts</h2>
            <button onClick={() => setAdd(!add)}>Add Activity</button>
            {add && <AddActivity />}
            {allActivities.map((e,i) => <Activity key={e.id} id={e.id} name={e.name} duration={e.duration} />)}
        </div>
    )
}

export default Workouts;